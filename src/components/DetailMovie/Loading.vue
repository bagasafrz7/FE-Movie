<template>
  <div>
    <div class="container" style="margin: 25px 0">
      <div class="row mb-4">
        <div class="col-md-4">
          <b-skeleton animation="wave" width="75%"></b-skeleton>
          <b-skeleton-img />
        </div>
        <div class="col-md-8">
          <div style="margin: 25px 0">
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </div>
          <div>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
          </div>
          <div style="margin: 25px 0">
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </div>
          <div style="display: flex; flex-direction: row">
            <b-skeleton type="button" class="mx-2"></b-skeleton>
            <b-skeleton type="button" class="mx-2"></b-skeleton>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <b-skeleton animation="wave" width="75%"></b-skeleton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <b-skeleton-img />
        </div>
        <div class="col-md-4">
          <b-skeleton-img />
        </div>
        <div class="col-md-4">
          <b-skeleton-img />
        </div>
      </div>
    </div>
  </div>
</template>
