<template>
  <!-- eslint-disable -->
  <div class="main container-fluid mb-m">
    <div class="grid no-gap mobile-1">
      <div class="col-auto">
        <aside class="filter">
          <div class="filter__item">
            <h3 class="filter__item__title is-expanded">地區</h3>
            <div class="expansion expansion--mobile is-active">
              <div class="filter__item__content">
                <v-select
                  :items="['全部', '三民區', '鳳山區', '仁武區']"
                  value="全部"
                  solo
                  flat
                  hide-details
                ></v-select>
              </div>
            </div>
          </div>
          <div class="filter__item">
            <h3 class="filter__item__title">類別</h3>
            <div class="expansion expansion--mobile">
              <div class="filter__item__content">
                <v-select
                  :items="['全部', '文化類', '古蹟類', '美食類']"
                  value="全部"
                  solo
                  flat
                  hide-details
                ></v-select>
              </div>
            </div>
          </div>
          <div class="filter__item">
            <h3 class="filter__item__title">進階篩選</h3>
            <div class="expansion expansion--mobile">
              <div class="filter__item__content">
                <v-checkbox label="免費參觀" value="free" color="primary" hide-details></v-checkbox>
                <v-checkbox label="全天候開放" value="open" color="primary" hide-details></v-checkbox>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="col flexible">
        <div class="main__content">
          <p class="text-l mb-s">共 <strong class="primary--text">200</strong> 筆搜尋結果 ...</p>
          <div class="main__tags mb-m">
            <v-chip close outline color="primary">三民區</v-chip>
            <v-chip close outline color="primary">免費</v-chip>
          </div>
          <ul class="main__cards mb-m">
            <li class="card card--pointer" v-for="n in 4" :key="n">
              <router-link class="card__link-item" :to="{name: 'item'}">
                <div class="grid no-gap tablet-1 mobile-1">
                  <div class="col-auto">
                    <figure class="card__figure card__figure--desktop-height">
                      <img src="https://khh.travel/FileArtPic.ashx?id=1846&w=1280&h=960" alt="picture">
                    </figure>
                  </div>
                  <div class="col flexible">
                    <div class="card__content">
                      <h2 class="text-l primary--text mb-b">中都愛河濕地公園</h2>
                      <p class="card__text mb-b">串起高雄城市生態綠廊的中都愛河濕地公園座落於愛河南側的十全與九如路之間，全長約2.5公里，佔地達七千餘平方公尺。為了打造與市民生活融合的「水岸花香的永續生態城市」，愛河濕地公園以生態工法構築邊坡，重現早期溼地豐富生態棲息環境。</p>
                      <div class="mb-s d-f-center-height">
                        <span class="text-s text--light mr-m">
                          <v-icon class="mr-s">fas fa-map-marker-alt</v-icon>三民區
                        </span>
                        <span class="text-s text--light mr-m">
                          <v-icon class="mr-s">fas fa-ticket-alt</v-icon>免費參觀
                        </span>
                        <v-chip small>文化類</v-chip>
                      </div>
                      <span class="text-s text--light card__text card__text--one">
                        <v-icon class="mr-s">far fa-clock</v-icon>週二至週日10:00-18:00，每週一公休
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="grid align-space-between mobile-1">
            <div class="col-auto hidden-mobile">
              <p class="d-f-center text--light">共27頁 | 目前第12頁 (10筆1頁)</p>
            </div>
            <div class="col-auto">
              <v-pagination
                v-model="page"
                :length="8"
                :total-visible="7"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      page: 2,
    };
  },
};
</script>

<style lang="scss">
.main {

  .filter {
    width: 18.75rem;

    @include respond-to('tablet') {
      width: 16rem;
    }
    @include respond-to('mobile') {
      width: 100%;
    }
  }

  &__content {
    margin: $spacing-l $spacing-xl 0 $spacing-xl;
  }

  &__tags {
    .v-chip {
      font-size: $font-size-s;

      &:not(:last-child) {
        margin-right: $spacing-s;
      }

      &__close {
        font-size: 16px;
      }
    }
  }

  &__cards .card {
    &:not(:last-child) {
      margin-bottom: $spacing-m;
    }
  }

  .v-pagination {
    justify-content: center;
    width: 100%;

    &__item {
      margin: $spacing-s / 2;
      color: $color-primary;
      font-size: $font-size;

      &--active {
        color: #fff;
      }
    }
    &__navigation {
      margin: $spacing-s / 2;
    }

    @include respond-to('mobile') {
      &__item,
      &__navigation {
        margin: $spacing-s / 4;
      }
    }

    &__more {
      margin: $spacing-s / 2;
      width: 1rem;
    }

    .v-icon {
      color: $color-primary;
      font-size: $font-size-s;
    }
  }
}


</style>
