<template>
  <q-page >
    <div >
      <div class="container">
        <div class="box">
          <div class="waveWrapper waveAnimation">
            <div class="userinfo">
              <q-avatar size="64px">
                <img :src="$store.state.user_info.headimgurl">
              </q-avatar>
              <div class="text-white q-mt-sm">{{$store.state.user_info.nickname}}</div>
            </div>
            <div class="waveWrapperInner bgTop">
              <div class="wave waveTop"></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
              <div class="wave waveMiddle"></div>
            </div>
            <div class="waveWrapperInner bgBottom">
              <div class="wave waveBottom"></div>
            </div>
          </div>

        </div>
        <div class='function'>
          <q-list >
            <q-item clickable v-ripple @click="$router.push('wallet')">
              <q-item-section avatar>
                <q-icon name="mdi-wallet-outline" />
              </q-item-section>
              <q-item-section style="margin-left: -20px">我的钱包</q-item-section>
              <q-item-section side>
                <q-icon color="grey-6" name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-separator inset color="gery"></q-separator>
            <q-item clickable v-ripple @click="$router.push('order_list')">
              <q-item-section avatar>
                <q-icon name="mdi-format-list-bulleted-square" />
              </q-item-section>
              <q-item-section style="margin-left: -20px">使用记录</q-item-section>
              <q-item-section side>
                <q-icon color="grey-6" name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-separator inset color="gery"></q-separator>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-book-open-outline" />
              </q-item-section>
              <q-item-section style="margin-left: -20px">用户手册</q-item-section>
              <q-item-section side>
                <q-icon color="grey-6" name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-separator inset color="gery"></q-separator>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
   name: 'My',
}
</script>
