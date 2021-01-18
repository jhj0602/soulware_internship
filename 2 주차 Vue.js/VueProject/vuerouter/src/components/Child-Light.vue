<template>
  <div>
    <h1>전구1</h1>

    {{ nameOfChild1 }}

    <h1>전구2</h1>
    {{ nameOfChild2 }}

    <h1>전구3</h1>

    {{ nameOfChild3 }}
  </div>
</template>
<script>
export default {
    props:['nameOfChild1','nameOfChild2','nameOfChild3'],
    data(){
        return{

        }
    }
}
</script>