<template>
  <q-page padding>

    <div class="q-pa-xs">
      <div class="justify-center q-gutter-sm">
        <q-intersection
          v-for="(order,i) in order_list"
          v-if="iSorder_list"
          :key="order.orderId"
          once
          transition="scale"
          class="example-item"
        >

          <q-card class="my-card" flat bordered>
            <q-linear-progress size="2px" :value="1" color="secondary"/>
            <q-card-section>

              <q-list dense class="rounded-borders q-pa-none" style="margin-left: -16px;margin-right: -16px;">
                <q-item class="q-px-none" clickable v-ripple>
                  <q-item-section>
                    {{order.userName}} - {{order.telepehone}}
                  </q-item-section>
                  <q-item-section side>
                    {{order.shopAddress}}
                  </q-item-section>
                </q-item>

              </q-list>

            </q-card-section>

            <q-card-actions>
              <div class="text-caption text-grey">
                {{order.CreatedDate}}
              </div>
              <q-space/>
              <div class="text-caption text-grey">
                实付:
              </div>
              <span class="text-secondary">
                ￥{{order.orderPrice}}
              </span>
            </q-card-actions>

          </q-card>
        </q-intersection>
        <div v-else class="text-body2 text-center">暂无订单</div>
      </div>
    </div>

  </q-page>
</template>


<script>
  import axios from "axios";

  const Qs = require('qs');
  export default {
    data() {
      return {
        expanded: false,
        iSorder_list : false,
        order_list: []
      }
    },
    beforeMount() {
      this.getOrder()
    },
    methods: {
      getOrder() {
        let that = this;
        axios.post(that.$store.state.url_paths.getOrder, Qs.stringify({
          access_token: that.$store.state.user_info.access_token
        }))
          .then(function (response) {
            if (response.data.code === 200) {
              that.order_list = response.data.data.OrderInfo;
              if (response.data.data.OrderInfo.length !== 0)
                that.iSorder_list = true;
              console.log(that.order_list)
            }
          })
      }
    },
  }
</script>
