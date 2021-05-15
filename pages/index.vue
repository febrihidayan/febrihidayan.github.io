<template>
    <section>
        <section class="section">
            <div class="container">
                <div class="columns is-a">
                    <div class="column is-5">
                        <figure class="image">
                            <img
                                class="is-rounded"
                                src="https://avatars.githubusercontent.com/u/42211742?v=4"
                                alt="profil">
                        </figure>
                    </div>
                    <div class="column">
                        <div class="content">
                            <strong>Hai Semuanya, Dengan Saya Febri Hidayan</strong>
                            <p>Saya seorang FullStack Web Developer yang sukanya otak-atik di Laravel dan Nuxt, hobi saya suka sekali bermain di sisi Backend Laravel. Ketimbang di Frontend yang suka bingung soal desain yang bagus kayamana, mending mengatur logika di backend wkwkw.</p>
                            <br>
                            <p>
                                Owner dari <a href="http://sekolahprogram.com" target="_blank" rel="noopener noreferrer">Sekolah Program</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero has-text-centered my-6">
            <div class="hero-body">
                <p class="title mb-6">Skill Saya Apa?</p>
                <div class="columns is-centered is-multiline">
                    <div
                        v-for="(item, index) in skill"
                        :key="index"
                        class="column"
                    >
                        <span
                            :class="`tag is-size-4 is-${item.color}`"
                        >{{
                            item.name
                        }}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero has-text-centered my-6">
            <div class="hero-head">
                <p class="title">
                    Special Thanks: HIMIT PENS Surabaya
                </p>
            </div>
            <div class="hero-body">
                <div class="columns is-centered is-multiline">
                    <div
                        v-for="(item, index) in himit"
                        :key="index"
                        class="column is-4"
                    >
                        <figure class="image">
                            <img :src="require(`~/assets/images/HIMIT/${item}`)" alt="sertifikat himit pens surabaya">
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero has-text-centered my-6">
            <div class="hero-head">
                <p class="title">
                    Special Thanks: Mario Teguh TV
                </p>
            </div>
            <div class="hero-body">
                <div class="columns is-centered is-multiline">
                    <div
                        v-for="(item, index) in MarioTeguh"
                        :key="index"
                        class="column is-4"
                    >
                        <figure class="image">
                            <img :src="require(`~/assets/images/MarioTeguh/${item}`)" alt="sertifikat mario teguh tv">
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero has-text-centered my-6">
            <div class="hero-head">
                <p class="title">
                    Sertifikat Lainnya
                </p>
            </div>
            <div class="hero-body">
                <div class="columns is-centered is-multiline">
                    <div
                        v-for="(item, index) in Lainnya"
                        :key="index"
                        class="column is-4"
                    >
                        <figure class="image">
                            <img :src="require(`~/assets/images/${item}`)" alt="sertifikat lainnya">
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skill: [
                {
                    name: 'PHP',
                    color: 'info'
                },
                {
                    name: 'Laravel',
                    color: 'danger'
                },
                {
                    name: 'Vue.js',
                    color: 'primary'
                },
                {
                    name: 'Nuxt.js',
                    color: 'warning'
                },
                {
                    name: 'Node.js',
                    color: 'primary'
                },
                {
                    name: 'Express.js',
                    color: 'info'
                },
                {
                    name: 'Socket.io',
                    color: 'success'
                },
                {
                    name: 'Git',
                    color: 'danger'
                },
                {
                    name: 'Rest API',
                    color: 'danger'
                }
            ],

            himit: [
                'Febri Hidayan -  VueJS Framework.jpg',
                'Febri Hidayan - Java Blibli.jpg',
                'Febri Hidayan - Laravel Fundamental.jpg',
                'Febri Hidayan - Vue.js VueX.jpg'
            ],

            MarioTeguh: [
                'laris manis versus laris mahal.jpg',
                'takut resiko gagal padahal ada resiko sukses.jpg',
                'untuk sukses anda harus juga badass.jpg'
            ],

            Lainnya: [
                'GoogleGapura/Sertifikat - Gapura Digital.png',
                'INDI/Febri Hidayan UI_UX.jpg',
                'Lainnya/FEBRI HIDAYAN  - big data.jpg',
                'Lainnya/Febri Hidayan - alppind.jpg',
                'Lainnya/Febri Hidayan - Go-Elderly.jpg',
                'Lainnya/Febri Hidayan - IAC.jpg',
                'Lainnya/Febri Hidayan - KAMMI Amikom.jpg',
                'Lainnya/Febri Hidayan - UPNV.jpg',
                'STMIKAMIK/Sertifikat kampus febri.jpg',
                'Telkom/Febri Hidayan - telkom.jpg',
                'TutorTeknik/FEBRI HIDAYAN - tutor teknik.jpg',
                'UNMakassar/Febri Hidayan - Universitas Negeri Makassar.jpg',
            ]
        }
    }
}
</script>