<template>
    <div class="home-page">
        <h1 class="mb-3 text-center">Welcome to IcarusEye</h1>
        <div class="demo-embed my-4 d-flex align-items-center">
            <!-- e.g. <VideoPlayer :src="demoUrl" /> -->
            <img src="@/assets/images/IcarusEye-Banner.svg" alt="IcarusEye Banner" class="img-fluid rounded" />
        </div>
        <p class="lead">
            IcarusEye is a real-time drone object detection and tracking system built
            with a custom YOLOv8s model and ByteTrack for robust multi-object tracking.
        </p>

        <!-- Key Features Section -->
        <section id="features" class="mt-5">
            <h2><i class="bi bi-key"></i> Key Features</h2>
            <ul>
                <li>Custom-trained YOLOv8s model on <a
                        href="https://github.com/VisDrone/VisDrone2019-Detection-Benchmark">VisDrone2019 dataset <i
                            class="bi bi-box-arrow-up-right"></i></a>.</li>
                <li>Real-time adjustment of detection parameters, including confidence thresholds and NMS settings.</li>
                <li>Supports multiple object tracking with Ultralytics ByteTrack</li>
                <li>Prioritizes low-latency processing for real-time applications, with detached inference and video to
                    ensure a smooth user experience.</li>
            </ul>
        </section>

        <!-- Demo Section -->
        <section id="demo" class="mt-5">
            <h2><i class="bi bi-play-circle"></i> Demo</h2>
            <p class="lead mb-3">Check out the demo video below:</p>
            <div class="video-embed">
                <vue-plyr>
                    <div class="plyr__video-embed">
                        <iframe
                            :src="demoYoutubeId"
                            allowfullscreen allowtransparency allow="autoplay"></iframe>
                    </div>
                </vue-plyr>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import CodeSnippet from '@/components/CodeSnippet.vue'

export default defineComponent({
    name: "Home",
    components: { CodeSnippet },
    setup() {
        // Demo Youtube Id
        const demoYoutubeId = ref("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        return {
            demoYoutubeId
        };
    }
});
</script>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}

.home-page h1 {
    color: #fff;
}

.home-page .lead {
    color: #ccc;
    font-size: large;
    display: block;
    margin: 0 auto;
    text-align: center;
}

.demo-embed img {
    display: block;
    margin: auto;
    width: 60%;
}

.btn-outline-light {
    border-color: #555;
    color: #ddd;
}

.btn-outline-light:hover {
    background-color: #444;
    color: #fff;
}

@media (max-width: 1600px) {

}

@media (max-width: 480px) {
    .demo-embed img {
        width: 95vw;
    }
}
</style>
