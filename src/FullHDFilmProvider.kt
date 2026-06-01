package com.lagradost.cloudstream3.plugins

import com.lagradost.cloudstream3.*
import com.lagradost.cloudstream3.utils.*
import org.jsoup.nodes.Element

class FullHDFilmProvider : MainAPI() {
    override var mainUrl = "https://www.fullhdfilmizlesene.life"
    override var name = "FullHDFilmizlesene"
    override val supportedTypes = setOf(TvType.Movie)
    override var lang = "tr"
    override val hasMainPage = true

    companion object {
        private const val SELECTOR_FILM_ITEMS = "ul.film-listesi li, div.film-box"
        private const val SELECTOR_TITLE = "h2, h3, .film-isim"
        private const val SELECTOR_LINK = "a"
        private const val SELECTOR_POSTER = "img"
        private const val SELECTOR_PAGE_TITLE = "h1, .film-adi"
        private const val SELECTOR_PAGE_POSTER = ".poster img, div.film-poster img"
        private const val SELECTOR_MEDIA = "iframe, source, video"
        private const val MAIN_PAGE_TITLE = "Son Eklenen Filmler"
    }

    override suspend fun getMainPage(page: Int, request: MainPageRequest): HomePageResponse? {
        return try {
            val document = app.get(mainUrl).document
            val items = document.select(SELECTOR_FILM_ITEMS).mapNotNull { it.toSearchResult() }
            
            if (items.isEmpty()) return newHomePageResponse(emptyList(), false)
            
            newHomePageResponse(
                listOf(HomePageList(MAIN_PAGE_TITLE, items)),
                false
            )
        } catch (e: Exception) {
            logError(e)
            null
        }
    }

    override suspend fun search(query: String): List<SearchResponse> {
        return try {
            if (query.isBlank()) return emptyList()
            
            val searchUrl = "$mainUrl/?s=${query.trim()}"
            val document = app.get(searchUrl).document
            
            document.select(SELECTOR_FILM_ITEMS).mapNotNull { it.toSearchResult() }
        } catch (e: Exception) {
            logError(e)
            emptyList()
        }
    }

    private fun Element.toSearchResult(): SearchResponse? {
        return try {
            val title = this.selectFirst(SELECTOR_TITLE)?.text()?.trim() ?: return null
            val href = this.selectFirst(SELECTOR_LINK)?.attr("href")?.trim() 
                ?: return null
            
            if (href.isBlank()) return null
            
            val posterUrl = this.selectFirst(SELECTOR_POSTER)?.attr("src")?.trim()

            newMovieSearchResponse(title, href, TvType.Movie) {
                this.posterUrl = posterUrl
            }
        } catch (e: Exception) {
            logError(e)
            null
        }
    }

    override suspend fun load(url: String): LoadResponse? {
        return try {
            val document = app.get(url).document
            val title = document.selectFirst(SELECTOR_PAGE_TITLE)?.text()?.trim() 
                ?: return null
            val poster = document.selectFirst(SELECTOR_PAGE_POSTER)?.attr("src")?.trim()
            
            val movieUrlList = extractMediaUrls(document)
            
            if (movieUrlList.isEmpty()) return null

            newMovieLoadResponse(title, url, TvType.Movie, movieUrlList) {
                this.posterUrl = poster
            }
        } catch (e: Exception) {
            logError(e)
            null
        }
    }

    private fun extractMediaUrls(document: org.jsoup.nodes.Document): List<String> {
        return document.select(SELECTOR_MEDIA)
            .mapNotNull { element ->
                (element.attr("src").ifEmpty { element.attr("data-src") })
                    .trim()
                    .takeIf { it.isNotEmpty() }
            }
            .distinct()
    }

    private fun logError(exception: Exception) {
        exception.printStackTrace()
    }
}
