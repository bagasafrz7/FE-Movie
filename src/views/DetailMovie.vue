<template>
  <div class="home">
    <section class="nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <Navbar />
          </div>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <Sidebar />
            <BottomNav />
          </div>
          <div class="col-md-9">
            <DetailMovie />
          </div>
        </div>
      </div>
    </section>
    <section class="main-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="isloading"></div>
              </template>
              <Footer />
            </b-skeleton-wrapper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import BottomNav from '@/components/BottomNav.vue'
import DetailMovie from '@/components/DetailMovie/index.vue'
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3
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
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    }
  },
  components: {
    Navbar,
    Footer,
    Sidebar,
    BottomNav,
    DetailMovie
  }
}
</script>

<style scoped src="@/assets/css/main.css"></style>
