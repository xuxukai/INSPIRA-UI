<template>
  <moBg
    background-color="black"
    :range-y="800"
    :particle-count="500"
    :base-hue="120"
    class="min-h-screen w-full overflow-hidden size-full flex-col"
  >
    <!-- Hero Section -->
    <section
      ref="topSection"
      class="relative h-screen flex flex-col items-center justify-center px-4"
    >
      <!-- Background Effects -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-black"
      ></div>
      <div
        class="absolute inset-0 opacity-40"
        style="
          background-image: url('data:image/svg+xml;utf8,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/></g></g></svg>');
        "
      ></div>

      <!-- Main Title -->
      <div class="relative z-10 text-center space-y-8 max-w-4xl">
        <motext
          words="INSPIRA UI"
          :delay="0.2"
          class="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
        />

        <!-- Subtitle with morphing text -->
        <div class="space-y-4">
          <moResText
            :texts="heroTexts"
            :morphTime="2"
            :coolDownTime="1.5"
            class="text-2xl md:text-4xl text-purple-300/80 font-light"
          />
          <p
            class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            探索未来设计的无限可能，打造令人惊艳的用户体验
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <moButton
            text="开始探索"
            @click="scrollToGallery"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
          />
          <moButton
            text="了解更多"
            @click="scrollToFeatures"
            class="bg-gradient-to-r from-pink-300 to-pink-900 hover:from-purple-700 hover:to-orange-700 text-white border-0 px-10 py-5 text-xl font-semibold shadow-2xl shadow-purple-500/25"
          />
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section ref="gallerySection" class="relative py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <motext
            words="精选作品"
            :delay="0.05"
            class="text-4xl md:text-6xl font-bold text-white mb-6"
          />
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            每一个作品都是创意与技术的完美结合
          </p>
        </div>

        <div class="h-[600px] w-full relative z-10">
          <moImglist
            :items="galleryItems"
            :bend="25"
            :border-radius="0.15"
            textColor="#e2e8f0"
            font="bold 28px Inter, sans-serif"
          />
        </div>

        <!-- 添加一些间距确保后续内容可见 -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <moButton
            text="更多精彩"
            @click="scrollToFeatures"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section
      ref="featuresSection"
      class="relative py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/30"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <motext
            words="核心特性"
            :delay="0.05"
            class="text-4xl md:text-6xl font-bold text-white mb-6"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div class="text-4xl mb-4">{{ feature.icon }}</div>
              <h3 class="text-xl font-bold text-white mb-3">
                {{ feature.title }}
              </h3>
              <p class="text-slate-400 leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <moButton
            text="新的未来"
            @click="scrollTostartSection"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 px-4" ref="startSection">
      <div class="max-w-4xl mx-auto text-center">
        <motext
          words="准备开始了吗？"
          :delay="0.08"
          class="text-4xl md:text-6xl font-bold text-white mb-8"
        />
        <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          加入我们，一起创造下一代的用户界面体验
        </p>
        <div class="grid place-content-center p-6">
          <moIconTree :images="imageUrls" />
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <moButton
            text="加入我们"
            @click="activatePortal"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-10 py-5 text-xl font-semibold shadow-2xl shadow-purple-500/25"
          />
          <moButton
            text="返回顶部"
            @click="handleViewDocs"
            class="bg-gradient-to-r from-yellow-300 to-yellow-900 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-10 py-5 text-xl font-semibold shadow-2xl shadow-purple-500/25"
          />
        </div>
      </div>
    </section>

    <!-- Cosmic Portal (Hidden by default) -->
    <div
      v-if="showPortal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div class="relative w-full" style="height: 80%">
        <CosmicPortal ref="cosmicPortal" container-class="rounded-lg" />
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <moButton
            text="更换颜色"
            @click="shiftDimensions"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
          />
          <moButton
            text="关闭"
            @click="closePortal"
            class="bg-gradient-to-r from-green-600 to-green-300 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
          />
        </div>
      </div>
    </div>
    <mofoucs />
  </moBg>
</template>

<script lang="ts" setup>
import CosmicPortal from "./CosmicPortal.vue";
import { ref, useTemplateRef, onMounted } from "vue";
import moButton from "@/componentsNew/moButton.vue";
import motext from "@/componentsNew/motext.vue";
import moImglist from "@/componentsNew/moImglist.vue";
import moResText from "@/componentsNew/moResText.vue";
import moBg from "@/componentsNew/moBg.vue";
import mofoucs from "@/componentsNew/mofoucs.vue";
import moIconTree from "@/componentsNew/moIconTree.vue";
import confetti from "canvas-confetti";
// Refs
const cosmicPortal = useTemplateRef("cosmicPortal");
const gallerySection = ref<HTMLElement>();
const featuresSection = ref<HTMLElement>();
const showPortal = ref(false);

// Hero section texts
const heroTexts = ref<string[]>([
  "创新未来",
  "极致游戏",
  "未来界面",
  "无限迭代",
]);

// Gallery items
const galleryItems = ref<Array<{ image: string; text: string }>>([
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    text: "现代设计",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    text: "创新界面",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    text: "用户体验",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    text: "数据可视化",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    text: "移动优先",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
    text: "响应式设计",
  },
]);

// Features data
const features = ref([
  {
    icon: "🚀",
    title: "极速性能",
    description: "基于现代技术栈构建，确保最佳的加载速度和用户体验",
  },
  {
    icon: "🎨",
    title: "精美设计",
    description: "每个组件都经过精心设计，符合现代审美和用户习惯",
  },
  {
    icon: "📱",
    title: "响应式布局",
    description: "完美适配各种设备尺寸，从手机到桌面端都有出色表现",
  },
  {
    icon: "⚡",
    title: "动画效果",
    description: "流畅的动画和过渡效果，让界面更加生动有趣",
  },
  {
    icon: "🔧",
    title: "易于定制",
    description: "灵活的配置选项，轻松适应不同的设计需求",
  },
  {
    icon: "🌟",
    title: "现代技术",
    description: "采用Vue 3、TypeScript等前沿技术，保证代码质量",
  },
]);

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const imageUrls = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

// Methods
function scrollToGallery() {
  gallerySection.value?.scrollIntoView({ behavior: "smooth" });
}

function scrollToFeatures() {
  featuresSection.value?.scrollIntoView({ behavior: "smooth" });
}
const startSection = ref<HTMLElement>();
const scrollTostartSection = () => {
  startSection.value?.scrollIntoView({ behavior: "smooth" });
};

function handleGetStarted() {
  showPortal.value = true;
  setTimeout(() => {
    if (cosmicPortal.value) {
      cosmicPortal.value.activatePortal();
    }
  }, 100);
}

const topSection = useTemplateRef("topSection");
function handleViewDocs() {
  topSection.value?.scrollIntoView({ behavior: "smooth" });
  makeYh();
}
function makeYh() {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return;

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });

    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame); // Keep calling the frame function
  }

  frame();
}

function closePortal() {
  showPortal.value = false;
}

function activatePortal() {
  showPortal.value = true;
  setTimeout(() => {
    if (cosmicPortal.value) {
      cosmicPortal.value.activatePortal();
    }
  }, 100);
}

function shiftDimensions() {
  if (cosmicPortal.value) {
    cosmicPortal.value.shiftDimensions();
  }
}

onMounted(() => {
  makeYh();
});
</script>
