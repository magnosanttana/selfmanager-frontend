<template>
  <div class="alert alert-warning " role="alert">
    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> -->
        <strong>{{titulo}} {{tipo}}</strong><br/><br/>
    <ul>
        <li v-for="(msg, i) in msgs" :key="i">{{msg}}</li>
    </ul>
 </div>
</template>

<script>
export default {
    name: 'Alert',
    props: [
        'tipo',
        'titulo',
        'msgs'
    ]
}
</script>

<style>

</style>