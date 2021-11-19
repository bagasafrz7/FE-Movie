<template>
  <div class="main-page">
    <div class="container-fluid">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <div class="isloading">
            <Loading />
          </div>
        </template>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="(item, index) in getListData"
            :key="index"
          >
            <div
              :style="{ backgroundImage: 'url(' + item.Poster + ')' }"
              class="post-preview-thumbnail"
            >
              <div class="read-more">
                <router-link :to="'/detail-movie/' + item.imdbID">
                  Tonton
                </router-link>
              </div>
            </div>
            <div class="card-content mt-2">
              <p @click="linkTitle(item)">{{ item.Title }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="paginations pagination-desktop">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              @change="handlePageChange"
              :per-page="perPage"
              first-number
              last-number
              prev-text="Sebelumnya"
              next-text="Selanjutnya"
              pills
            ></b-pagination>
          </div>
          <div class="paginations pagination-mobile">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              @change="handlePageChange"
              :per-page="perPage"
              first-number
              last-number
              prev-text="<"
              next-text=">"
              pills
            ></b-pagination>
          </div>
        </div>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading.vue'
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      titleMovie: 'marvel',
      getListData: '',
      rows: '',
      perPage: 10,
      currentPage: 1,
      page: 1
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
    this.getDataMovie()
  },
  methods: {
    getDataMovie() {
      axios
        .post(
          `${process.env.VUE_APP_URL}&s=${this.titleMovie}&page=${this.page}`
        )
        .then((response) => {
          this.getListData = response.data.Search
          this.rows = response.data.totalResults
          //   console.log(response.data.totalResults)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handlePageChange(currentPage) {
      //   console.log(currentPage)
      //   this.$router.push(`&page=${this.currentPage}`)
      this.page = currentPage
      this.getDataMovie()
    },
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    },
    linkTitle(item) {
      this.$router.push('/detail-movie/' + item.imdbID)
    }
  },
  components: {
    Loading
  }
}
</script>

<style scoped src="@/assets/css/main.css"></style>
