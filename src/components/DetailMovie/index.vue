<template>
  <div class="detail-movie">
    <div class="container">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <div class="isloading">
            <Loading />
          </div>
        </template>
        <div class="row">
          <h2 class="mb-4">{{ getDetailData.Title }}</h2>
          <div class="col-md-4">
            <img :src="getDetailData.Poster" alt="" srcset="" />
          </div>
          <div class="col-md-8 sub-detail">
            <div class="mini-info">
              <p>
                Release Date: {{ getDetailData.Released }}<br />
                Language: {{ getDetailData.Language }} <br />
                Genre: {{ getDetailData.Genre }} <br />
                Cast & Crew: {{ getDetailData.Actors }}
                <br />
                Director: {{ getDetailData.Director }} <br />
                Length: {{ getDetailData.Runtime }}
              </p>
            </div>
            <div class="sinopsis">
              <h2 class="mt-2 mb-2">Sinopsis</h2>
              <p>{{ getDetailData.Plot }}</p>
            </div>
            <div class="link-button">
              <button class="btn btn-buy">Buy Ticket</button>
              <button class="btn btn-buy">Watch Trailer</button>
            </div>
          </div>
        </div>
        <div class="row">
          <h2 class="mt-4 mb-4">Now Playing</h2>
          <div class="col-md-4">
            <div
              :style="{
                backgroundImage: 'url(' + getListData[0].Poster + ')'
              }"
              class="post-preview-thumbnail"
            >
              <div class="read-more">
                <router-link
                  :to="'/detail-nowplaying/' + getListData[0].imdbID"
                >
                  Tonton
                </router-link>
              </div>
            </div>
            <div class="card-content mt-2">
              <p @click="link0()">{{ getListData[0].Title }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              :style="{
                backgroundImage: 'url(' + getListData[1].Poster + ')'
              }"
              class="post-preview-thumbnail"
            >
              <div class="read-more">
                <router-link
                  :to="'/detail-nowplaying/' + getListData[1].imdbID"
                >
                  Tonton
                </router-link>
              </div>
            </div>
            <div class="card-content mt-2">
              <p @click="link1()">{{ getListData[1].Title }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              :style="{
                backgroundImage: 'url(' + getListData[2].Poster + ')'
              }"
              class="post-preview-thumbnail"
            >
              <div class="read-more">
                <router-link
                  @click="detailNowPla"
                  :to="'/detail-nowplaying/' + getListData[2].imdbID"
                >
                  Tonton
                </router-link>
              </div>
            </div>
            <div class="card-content mt-2">
              <p @click="link2()">{{ getListData[2].Title }}</p>
            </div>
          </div>
        </div>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/DetailMovie/Loading.vue'

export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      imdbID: this.$route.params.imdbID,
      titleMovie: 'inception',
      getDetailData: '',
      page: 1,
      getListData: ''
    }
  },
  computed: {
    readingTime() {
      let minutes = 0
      const contentAsString = JSON.stringify(this.content)
      const words = contentAsString.split(' ').length
      const wordsPerMinute = 250
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    }
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()
        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 1000)
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created() {
    this.$_loadingTimeInterval = null
  },
  mounted() {
    this.startLoading()
    this.geDetailtDataMovie()
    this.getDataMovie()
  },
  methods: {
    geDetailtDataMovie() {
      axios
        .post(`${process.env.VUE_APP_URL}&i=${this.imdbID}`)
        .then((response) => {
          this.getDetailData = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getDataMovie() {
      axios
        .post(
          `${process.env.VUE_APP_URL}&s=${this.titleMovie}&page=${this.page}`
        )
        .then((response) => {
          this.getListData = response.data.Search
        })
        .catch((error) => {
          console.log(error)
        })
    },
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    },
    link0() {
      this.$router.push('/detail-nowplaying/' + this.getListData[0].imdbID)
    },
    link1() {
      this.$router.push('/detail-nowplaying/' + this.getListData[1].imdbID)
    },
    link2() {
      this.$router.push('/detail-nowplaying/' + this.getListData[2].imdbID)
    }
  },
  components: {
    Loading
  }
}
</script>

<style scoped src="@/assets/css/main.css"></style>
