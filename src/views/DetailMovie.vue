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
    <section class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <Footer />
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
