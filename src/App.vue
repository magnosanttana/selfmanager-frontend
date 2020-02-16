<template>
  <div id="app" class="theme-green">
    <Header />
    <Leftsidebar />
    <Content />
  </div>
</template>

<script>
import '@/assets/js/admin.js'
import '@/assets/js/demo.js'

import Header from "@/components/template/Header"
import Leftsidebar from "@/components/template/Leftsidebar"
import Content from "@/components/template/Content"

export default {
    name: 'App',
    components: { Content, Header, Leftsidebar}
}
</script>

<style>

</style>
