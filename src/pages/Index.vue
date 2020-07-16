<template>
  <q-page class="q-pa-sm">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        height="200px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px"/>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px"/>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px"/>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px"/>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-card class="my-card">
        <q-card-section v-if="!device.device_id">
          当前机器：未选择
        </q-card-section>

        <q-card-section v-else class="q-pa-none">
          <q-item clickable v-ripple class="q-py-none">
            <q-item-section avatar class="items-center">
              <div class="flex-center" style="height: 40%">
                当前机器：
              </div>
              <q-avatar rounded>
                <q-icon size="2rem" color="primary" name="mdi-washing-machine"/>
              </q-avatar>
            </q-item-section>

            <q-item-section class="q-ml-lg">
              <q-item-label>
                {{device.device_id}}
              </q-item-label>
              <q-item-label caption>
                {{device.device_name}}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>

      </q-card>
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="选择机器"
          icon="mdi-washing-machine"
          :done="step > 1"
        >
          扫码选择机器，若机器二维码损坏请到设置反馈

          <q-stepper-navigation>
            <q-btn @click="chooseDevice()" color="primary" label="扫码"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          :title="step2_title"
          icon="mdi-cash-usd"
          :done="step > 2"
          @click="step = 2"
        >

          <div class="flex q-gutter-sm row">
            <q-field class="col-5" standout="bg-primary text-white" stack-label label="毛巾" @focus="choosePrice(2)">
              <template v-slot:prepend>
                <q-icon>
                  <svg t="1587893711376" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1903" width="64" height="64">
                    <path
                      d="M919.15776 181.39136a76.47744 76.47744 0 0 0-27.39712 5.16608 163.45088 163.45088 0 0 0-116.19328-48.27648 57.02656 57.02656 0 0 0-6.912 0.47104V138.24H373.6832A136.55552 136.55552 0 0 0 247.296 224.49664H180.18304a79.18592 79.18592 0 1 0-70.31296 115.61472 77.70624 77.70624 0 0 0 74.65984-57.54368H237.056v437.59104a72.16128 72.16128 0 0 0 71.7824 71.85408h143.58528v57.61024h0.64512a36.25984 36.25984 0 0 0-0.71168 6.95296 65.024 65.024 0 0 0 64.84992 65.024 36.03456 36.03456 0 0 0 6.912-0.7168v0.7168h344.97024v-0.7168a36.23936 36.23936 0 0 0 6.97856 0.72192 65.024 65.024 0 0 0 64.84992-65.024 40.0128 40.0128 0 0 0-0.87552-8.05376h0.87552V335.18592a77.59872 77.59872 0 0 0 57.4208-74.47552 79.42656 79.42656 0 0 0-79.1808-79.31904z m-604.16 43.17184a74.92096 74.92096 0 0 1 117.37088 0H314.99776z m223.65184 638.976a28.53376 28.53376 0 0 1-28.42624-28.57984c0 2.65216 0.06144-14.59712 0.06144-14.59712v-88.41728a275.11296 275.11296 0 0 0 55.05536-20.23936c23.26016-10.46016 45.23008-20.34688 66.31424-20.34688 25.11872 0 50.31424 11.264 74.68032 22.20032 24.064 10.78784 46.82752 20.992 69.55008 20.992 33.4336 0 63.71328-13.64992 90.42432-25.69216 5.72928-2.56 11.264-5.08416 16.60928-7.34208v118.8608s0.39424 16.8704 0 13.6448v1.18272h0.06144a28.5696 28.5696 0 0 1-28.48768 28.34944h-315.84256zM484.79232 196.21888h269.01504l11.648 0.92672a75.42784 75.42784 0 0 1 10.112-0.92672 107.66848 107.66848 0 0 1 107.4176 107.6736V541.696c-7.11168 2.86208-14.4384 6.144-22.11328 9.63584-25.37984 11.46368-54.144 24.45824-84.33152 24.45824-19.7632 0-41.23648-9.55904-63.96928-19.67616-25.89184-11.52-52.66432-23.43424-81.10592-23.43424-24.4224 0-49.01888 10.99776-72.80128 21.62688a291.70688 291.70688 0 0 1-48.37376 18.33984V275.08736a135.72608 135.72608 0 0 0-25.4976-78.86848z m146.67264 437.12512c-24.448 0-49.07008 11.01824-72.87808 21.67296a292.79744 292.79744 0 0 1-48.29696 18.34496v-42.2144a274.77504 274.77504 0 0 0 55.05536-20.23424c23.26016-10.46528 45.23008-20.34688 66.31424-20.34688 25.11872 0 50.31424 11.264 74.68032 22.1952 24.064 10.78784 46.82752 20.992 69.55008 20.992 33.53088 0 63.88224-13.69088 90.65472-25.76896 5.632-2.56 11.10528-5.00736 16.384-7.2448v41.66144c-7.12192 2.8672-14.45888 6.18496-22.13888 9.66144-25.35424 11.4688-54.0928 24.4736-84.24448 24.4736-19.75808 0-41.23136-9.56928-63.96416-19.70176-25.89696-11.5456-52.67456-23.49056-81.11616-23.49056z m-300.928 100.73088a35.71712 35.71712 0 0 1-35.59424-35.75808V296.87296a79.7184 79.7184 0 0 0 1.46432-14.37184h154.56768l1.3824 14.37184v437.20192H330.53696zM131.1232 260.65408a21.28896 21.28896 0 1 1-21.25312-21.3248 21.34528 21.34528 0 0 1 21.25312 21.3248z"
                      p-id="1904"></path>
                  </svg>
                </q-icon>
              </template>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">￥2.00</div>
              </template>
            </q-field>

            <q-field class="col-5" standout="bg-primary text-white" stack-label label="小件衣物" @focus="choosePrice(3)">
              <template v-slot:prepend>
                <q-icon color="bg-white">
                  <svg t="1587893565424" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1622" width="64" height="64">
                    <path
                      d="M822.4 224c35.2 0 67.2 28.8 73.6 64l32 243.2c6.4 38.4-12.8 76.8-41.6 102.4l-236.8 176c-19.2 12.8-41.6 22.4-64 22.4h-172.8c-22.4 0-44.8-6.4-64-22.4l-236.8-176c-32-22.4-48-64-41.6-102.4L96 288c3.2-35.2 35.2-64 73.6-64h652.8z m41.6 128H128l-25.6 185.6v16H96c22.4-6.4 41.6-9.6 64-9.6 121.6 0 224 96 224 217.6v25.6c9.6 3.2 19.2 6.4 28.8 6.4h172.8c9.6 0 19.2-3.2 28.8-6.4v-25.6c0-121.6 99.2-217.6 224-217.6 19.2 0 38.4 3.2 54.4 6.4v-12.8L864 352zM160 582.4c-16 0-32 3.2-44.8 6.4 3.2 6.4 9.6 9.6 16 16l214.4 160c0-102.4-83.2-182.4-185.6-182.4z m672 0c-102.4 0-185.6 80-185.6 179.2l211.2-160c6.4-3.2 9.6-9.6 16-16l9.6 3.2c-12.8-6.4-32-6.4-51.2-6.4z m-9.6-320H169.6c-16 0-32 12.8-35.2 28.8l-3.2 28.8h729.6l-3.2-25.6c-3.2-16-16-28.8-28.8-28.8l-6.4-3.2z"
                      p-id="1623"></path>
                    <path
                      d="M582.4 841.6h-172.8c-25.6 0-48-9.6-70.4-22.4L102.4 640c-35.2-25.6-51.2-67.2-44.8-108.8l32-243.2C92.8 246.4 128 214.4 169.6 214.4h652.8c41.6 0 73.6 32 80 70.4l32 243.2c6.4 41.6-12.8 83.2-44.8 108.8l-236.8 176c-19.2 19.2-44.8 28.8-70.4 28.8zM169.6 230.4c-32 0-60.8 25.6-64 57.6l-32 243.2c-3.2 35.2 9.6 73.6 38.4 96l236.8 176c16 12.8 38.4 19.2 60.8 19.2h172.8c22.4 0 41.6-6.4 60.8-19.2l236.8-176c28.8-22.4 44.8-57.6 38.4-92.8l-32-243.2c-3.2-32-32-57.6-64-57.6H169.6zM582.4 800h-172.8c-9.6 0-22.4-3.2-32-6.4l-6.4-3.2v-6.4-25.6c0-115.2-96-208-214.4-208-16 0-35.2 3.2-51.2 6.4l-9.6 3.2v-9.6-6.4-9.6l25.6-192h752l25.6 192v25.6l-9.6-3.2c-16-3.2-35.2-6.4-54.4-6.4-118.4 0-214.4 92.8-214.4 208v32l-6.4 3.2c-9.6 6.4-19.2 6.4-32 6.4z m-192-19.2c6.4 3.2 12.8 3.2 19.2 3.2h172.8c6.4 0 12.8 0 19.2-3.2v-19.2c0-124.8 102.4-224 230.4-224 16 0 32 3.2 48 3.2v-3.2l-22.4-179.2H134.4l-22.4 179.2v3.2c16-3.2 32-3.2 48-3.2 128 0 230.4 102.4 230.4 224v19.2z m249.6-3.2v-16c0-102.4 86.4-188.8 192-188.8 12.8 0 25.6 0 38.4 3.2h3.2c3.2 0 6.4 3.2 9.6 3.2l-3.2 16h-3.2c-3.2 6.4-9.6 9.6-12.8 12.8l-224 169.6z m192-188.8c-92.8 0-166.4 67.2-176 156.8l198.4-150.4c3.2 0 3.2-3.2 6.4-3.2-9.6-3.2-19.2-3.2-28.8-3.2z m-480 188.8l-12.8-9.6-214.4-160c-6.4-3.2-12.8-9.6-16-16l-6.4-9.6 12.8-3.2c12.8-3.2 28.8-6.4 44.8-6.4 105.6 0 192 83.2 192 188.8v16z m-220.8-185.6l3.2 3.2 201.6 150.4c-9.6-86.4-83.2-156.8-176-156.8-9.6 0-19.2 0-28.8 3.2z m739.2-265.6H121.6L128 291.2c3.2-19.2 19.2-35.2 41.6-35.2h659.2c19.2 3.2 35.2 16 38.4 35.2l3.2 35.2zM140.8 310.4h710.4l-3.2-19.2c0-12.8-9.6-22.4-22.4-22.4H169.6c-12.8 0-25.6 9.6-25.6 22.4l-3.2 19.2z"
                      p-id="1624"></path>
                  </svg>
                </q-icon>
              </template>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">￥3.00</div>
              </template>
            </q-field>
            <q-field class="col-5" standout="bg-primary text-white" stack-label label="大件衣物" @focus="choosePrice(4)">
              <template v-slot:prepend>
                <q-icon>
                  <svg t="1587893651783" class="icon" viewBox="0 0 1175 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1764" width="64" height="64">
                    <path
                      d="M1145.363 238.933L929.185 22.756C914.015 7.586 891.26 0 868.504 0H747.14l-7.585 3.793c-41.719 22.755-98.608 37.926-155.497 37.926S474.074 30.34 428.563 3.793L420.978 0H307.2c-30.34 0-56.889 15.17-68.267 41.719L22.756 254.104C7.586 269.274 0 292.03 0 310.993c0 22.755 7.585 41.718 22.756 56.888l155.496 155.497c11.378 11.378 30.34 22.755 49.304 22.755v379.26c0 41.718 34.133 79.644 79.644 79.644h553.719c41.718 0 79.644-34.133 79.644-79.644v-394.43c18.963 0 34.133-11.378 49.304-22.756l155.496-155.496c30.34-34.133 30.34-83.437 0-113.778z m-49.304 60.682L940.563 455.11l-3.793 3.793h-3.792l-60.682-56.89v523.379c0 3.792-3.792 7.585-7.585 7.585H307.2c-3.793 0-3.793 0-3.793-3.793l-3.792-3.792V417.185l-60.682 53.096h-3.792s-3.793 0-3.793-3.792L72.06 314.785l-3.792-3.792s0-3.793 3.792-3.793L288.237 91.022l7.585-7.585 3.793-7.585c0-3.793 3.792-3.793 7.585-3.793h98.607c49.304 26.548 113.778 41.719 178.252 41.719s128.948-15.17 178.252-41.719H876.09l216.178 216.178c7.585 3.793 7.585 7.585 3.792 11.378z"
                      p-id="1765"></path>
                  </svg>
                </q-icon>
              </template>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">￥4.00</div>
              </template>
            </q-field>
            <q-field class="col-5" standout="bg-primary text-white" stack-label label="床单被套" @focus="choosePrice(5)">
              <template v-slot:prepend>
                <q-icon>
                  <svg t="1587893798711" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="3562" width="64" height="64">
                    <path
                      d="M832.981333 124.16H190.997333C94.506667 124.16 16 210.709333 16 317.077333v149.952c0 16.874667 5.674667 32.448 15.232 44.906667a73.514667 73.514667 0 0 0-15.232 44.885333v150.058667c0 106.368 78.506667 192.917333 174.997333 192.917333h641.984c96.512 0 175.018667-86.549333 175.018667-192.917333V317.098667c0-106.389333-78.506667-192.938667-175.018667-192.938667z m111.701334 582.741333c0 71.466667-50.112 129.6-111.701334 129.6H190.997333c-61.589333 0-111.68-58.154667-111.68-129.6v-150.058666c0-5.802667 4.736-10.56 10.56-10.56h643.754667c29.098667 0 52.757333 28.394667 52.757333 63.317333s-23.658667 63.317333-52.757333 63.317333H205.952a31.658667 31.658667 0 0 0 0 63.317334h527.658667c64 0 116.074667-56.810667 116.074666-126.634667 0-39.253333-16.448-74.368-42.218666-97.621333 25.770667-23.253333 42.218667-58.368 42.218666-97.621334 0-69.824-52.096-126.634667-116.074666-126.634666H205.952a31.637333 31.637333 0 1 0 0 63.317333h527.658667c29.098667 0 52.757333 28.394667 52.757333 63.317333s-23.658667 63.317333-52.757333 63.317334H89.962667a10.666667 10.666667 0 0 1-10.645334-10.645334v-149.952c0-71.466667 50.090667-129.6 111.68-129.6h641.984c61.589333 0 111.701333 58.154667 111.701334 129.6v389.824z"
                      p-id="3563"></path>
                  </svg>
                </q-icon>
              </template>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">￥5.00</div>
              </template>
            </q-field>
          </div>

        </q-step>

        <q-step
          :name="3"
          title="支付"
          icon="assignment"
          disable
        >
          <div class="flex row q-gutter-sm">
            <q-btn :loading="loading.wx_pay" outline dense color="green" style="width: 44%" @click="wxPay()"
                   icon="img:statics/index_icons/pay_1.svg">
              <span class="q-pl-sm">微信支付</span>
            </q-btn>
            <q-btn :loading="loading.wallet_pay" outline color="primary" icon="mdi-wallet" style="width: 45%"
                   @click="wxPay()">
              <span class="q-pl-sm">钱包支付</span>
            </q-btn>
          </div>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>

  export default {
    name: 'Index',
    data() {
      return {
        slide: 'style',
        lorem: 'test.',
        step: 1,
        model: null,
        show: true,
        step2_title: '选择模式',
        device: {
          device_id: null,
          device_name: null,
        },
        loading: {
          wx_pay: false,
          wallet_pay: false
        }
      }
    },
    created() {
      if (this.$store.state.device_info.device_id) {
        this.step = 2;
        this.device = this.$store.state.device_info;
        this.device.device_name = this.$store.state.dorm.washingMachineDorm;
      }
    },
    methods: {
      chooseDevice() {
        let that = this;
        that.step = 2;
        that.device = {
          device_id: 1,
          device_name: '洗衣机'
        };
      },
      choosePrice(price) {
        let that = this;
        console.log(price);
        that.model = price;
        setTimeout(function () {
            that.step = 3;
            that.step2_title = '已选择￥' + price
          }, 100
        )
      },
      wxPay: function () {
        this.loading.wx_pay = true;
        this.$api.device.washBegin(this.$store.state.user_info.access_token, this.$store.state.device_info.device_id, this.model)
          .then(res => {
            this.loading.wx_pay = false;
            if (res.data.code === 200) {
              this.$q.notify({
                type: 'negative',
                color: 'green',
                position: 'top',
                message: '启动成功',
              })
            } else {
              this.$q.notify({
                type: 'negative',
                color: 'red',
                position: 'top',
                message: '启动失败,' + res.data.response.msg,
              })
            }
          })
          .catch(error => {
            console.log(error)
          });
      },

    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
