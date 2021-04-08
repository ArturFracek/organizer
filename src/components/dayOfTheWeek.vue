
<template>
<!-- To jest komponent jednego kwadrata (np poniedziałek), później w weekView dzięki
pętli wyswetle nazwę każdego dnia tygodnia -->
    <div v-for="day in days" :key="day" class="square">{{ day }}</div>
</template>

<script>

export default {
    name: "dayOfTheWeek",
    days: {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    },
}
</script>

<style scoped>
.square{
    background-color: blue;
    width: 3em;
    height: 2em;
}
</style>