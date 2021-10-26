<template>
    <div class="spinner">
        <div class="spinner__content">
            <span>Espere por favor...</span>
            <h3 class="spinner__icon">
                <font-awesome-icon spin :icon="['fas', 'sync']" />
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerComponent'
}
</script>

<style lang="scss" scoped>
@import "./Spinner.scss";
</style>