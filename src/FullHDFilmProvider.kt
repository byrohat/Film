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

    override suspend fun getMainPage(page: Int, request: MainPageRequest): HomePageResponse? {
        val document = app.get(mainUrl).document
        val home = ArrayList<HomePageList>()
        
        val items = document.select("ul.film-listesi li, div.film-box").mapNotNull {
            it.toSearchResult()
        }
        if (items.isNotEmpty()) {
            home.add(HomePageList("Son Eklenen Filmler", items))
        }
        return newHomePageResponse(home, false)
    }

    override suspend fun search(query: String): List<SearchResponse> {
        val searchUrl = "$mainUrl/?s=$query"
        val document = app.get(searchUrl).document
        
        return document.select("ul.film-listesi li, div.film-box").mapNotNull {
            it.toSearchResult()
        }
    }

    private fun Element.toSearchResult(): SearchResponse? {
        val title = this.selectFirst("h2, h3, .film-isim")?.text() ?: return null
        val href = this.selectFirst("a")?.attr("href") ?: return null
        val posterUrl = this.selectFirst("img")?.attr("src")

        return newMovieSearchResponse(title, href, TvType.Movie) {
            this.posterUrl = posterUrl
        }
    }

    override suspend fun load(url: String): LoadResponse? {
        val document = app.get(url).document
        val title = document.selectFirst("h1, .film-adi")?.text() ?: return null
        val poster = document.selectFirst(".poster img, div.film-poster img")?.attr("src")
        
        val movieUrlList = ArrayList<String>()
        document.select("iframe, source, video").forEach {
            val src = it.attr("src").ifEmpty { it.attr("data-src") }
            if (src.isNotEmpty()) {
                movieUrlList.add(src)
            }
        }

        return newMovieLoadResponse(title, url, TvType.Movie, movieUrlList) {
            this.posterUrl = poster
        }
    }
}
