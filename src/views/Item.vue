<template>
  <!-- eslint-disable -->
  <div class="item-page">
    <div class="item-page__header mb-l">
      <div class="grid align-middle">
        <div class="col-auto">
          <v-btn href="#/" color="primary" depressed>回上一頁</v-btn>
        </div>
        <div class="col flexible">
          <div class="item-page__breadcrumbs-wrapper">
            <v-breadcrumbs divider="/">
              <v-breadcrumbs-item href="#/">首頁</v-breadcrumbs-item>
              <v-breadcrumbs-item disabled>中都愛河濕地公園</v-breadcrumbs-item>
            </v-breadcrumbs>
          </div>
        </div>
      </div>
    </div>
    <div class="card elevation-1">
      <figure class="card__figure">
        <img src="https://khh.travel/FileArtPic.ashx?id=1846&w=1280&h=960" alt="picture">
      </figure>
      <div class="card__content">
        <h1 class="text-xl primary--text mb-b">中都愛河濕地公園</h1>
        <div class="text-s text--light mb-b">
          <v-icon class="mr-s">far fa-clock</v-icon>週二至週日10:00-18:00，每週一公休
        </div>
        <div class="text-s text--light mb-l">
          <v-icon class="mr-s">fas fa-map-marker-alt</v-icon>高雄市三民區同盟三路與十全三路交叉處
        </div>
        <p>串起高雄城市生態綠廊的中都愛河濕地公園座落於愛河南側的十全與九如路之間，全長約2.5公里，佔地達七千餘平方公尺。為了打造與市民生活融合的「水岸花香的永續生態城市」，愛河濕地公園以生態工法構築邊坡，重現早期溼地豐富生態棲息環境。園區設置原木建築為遊客解說中心，另有木造涼亭、吊橋、潮汐親水平台以及漂流木為設計主軸的燈具座椅等設施，質樸中深具原野氣息，而仿自然的複層林相植栽也使市區重現豐富林相。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
};
</script>

<style lang="scss">
.item-page {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: $spacing-l $spacing-xl $spacing-xl $spacing-xl;

  @include respond-to('mobile') {
    padding-left: 0;
    padding-right: 0;
  }

  &__header {
    @include respond-to('mobile') {
      padding: 0 $spacing-m;
    }
  }

  &__breadcrumbs-wrapper {
    display: flex;
    align-items: center;
    height: 2.5rem;
    background-color: $color-bg-dark;

    .v-breadcrumbs {
      flex-wrap: nowrap;
      padding: ($spacing - 0.25rem) $spacing;

      li {
        font-size: $font-size;
      }

      &__item {
        white-space: nowrap;
      }
    }
  }
}
</style>
