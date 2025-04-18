<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text animate-fade-in-left">
            <h1 class="heading">
              高性能向量数据库<br />
              <span class="text-gradient">为AI时代而生</span>
            </h1>
            <p class="subheading animate-fade-in">
              VexDB是一款开源向量数据库，专为GenAI应用程序构建。通过pip安装，执行高速搜索，并可扩展到数十亿向量，性能损失最小。
            </p>
            <div class="button-group animate-fade-in-up">
              <a href="/docs" class="btn btn-primary hover-scale">
                快速开始
              </a>
              <a href="#" class="btn btn-outline hover-scale">
                了解更多
              </a>
            </div>
          </div>
          <div class="hero-code animate-fade-in-right">
            <div class="code-container">
              <pre class="typewriter-effect"><code>from vexdb import VexDBClient

  # 创建客户端连接
  client = VexDBClient("demo.db")

  # 创建集合
  client.create_collection(
    collection_name="demo_collection",
    dimension=768
  )

  # 插入向量数据
  client.insert(
    collection_name="demo_collection",
    vectors=[[0.1, 0.2, ...]]
  )

  # 搜索相似向量
  results = client.search(
    collection_name="demo_collection",
    query_vector=[0.1, 0.2, ...],
    limit=5
  )</code></pre>
            </div>
            <div class="floating-circle circle-1"></div>
            <div class="floating-circle circle-2"></div>
            <div class="floating-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header scroll-fade-in">
          <h2 class="section-title">为什么选择 VexDB？</h2>
          <p class="section-description">
            VexDB提供了卓越的性能、可伸缩性和易用性，让您的AI应用更加智能
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card scroll-fade-in">
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="feature-title">闪电般的速度</h3>
            <p class="feature-description">
              通过优化的索引和搜索算法，VexDB可以在毫秒级内检索到最相似的向量，无论数据集多大。
            </p>
          </div>

          <div class="feature-card scroll-fade-in">
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="feature-title">轻松扩展</h3>
            <p class="feature-description">
              从单机到分布式集群，VexDB可以随着您的需求增长而无缝扩展，支持数十亿向量的存储和检索。
            </p>
          </div>

          <div class="feature-card scroll-fade-in">
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="feature-title">灵活配置</h3>
            <p class="feature-description">
              支持多种相似度度量和索引类型，可以根据您的特定用例进行优化，获得最佳性能。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started Section -->
    <section class="getting-started-section">
      <div class="container">
        <div class="section-header scroll-fade-in">
          <h2 class="section-title">快速开始</h2>
          <p class="section-description">
            只需几行代码，即可开始使用VexDB进行向量搜索
          </p>
        </div>

        <div class="code-demo-container">
          <div class="code-header">
            <div class="code-dots">
              <div class="code-dot red"></div>
              <div class="code-dot yellow"></div>
              <div class="code-dot green"></div>
            </div>
            <span class="code-title">安装和基本使用</span>
          </div>

          <pre class="code-block"><code># 安装VexDB
  pip install vexdb

  # 导入库
  from vexdb import VexDBClient

  # 创建客户端
  client = VexDBClient("my_database.db")

  # 创建集合
  client.create_collection(
      collection_name="images",
      dimension=512
  )

  # 插入向量数据
  client.insert(
      collection_name="images",
      vectors=[[0.1, 0.2, ...]], 
      ids=["img_1"]
  )

  # 搜索相似向量
  results = client.search(
      collection_name="images",
      query_vector=[0.1, 0.2, ...],
      limit=5
  )

  # 输出结果
  for result in results:
      print(f"ID: {result.id}, Distance: {result.distance}")</code></pre>

          <div class="code-footer">
            <a href="/docs" class="btn btn-primary hover-scale">
              查看完整文档
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content scroll-fade-in">
          <h2 class="cta-title">准备好开始使用VexDB了吗？</h2>
          <p class="cta-description">
            加入成千上万的开发者行列，使用VexDB构建下一代AI应用
          </p>
          <div class="cta-buttons animate-fade-in-up">
            <a href="/docs" class="btn btn-light hover-scale">
              阅读文档
            </a>
            <a href="#" class="btn btn-outline-light hover-scale">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.theme-main {
  width: 100%;
  display: block!important;
}
</style>


<style>
:root {
  --primary-color: #1a73e8;
  --primary-dark: #0d47a1;
  --primary-light: #4285f4;
  --secondary-color: #50e3c2;
  --secondary-light: #5cffe3;
  --dark-color: #1e293b;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-600: #4b5563;
  --white: #ffffff;
}


.home-container {
  width: 100%;
  flex: 1!important;
}

/* 基本样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 5rem 0;
}

h1, h2, h3 {
  margin: 0;
  font-weight: bold;
  color: var(--dark-color);
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}

.btn-light {
  background-color: white;
  color: var(--primary-color);
}

.btn-outline-light {
  background-color: transparent;
  border: 1px solid white;
  color: white;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(to bottom, var(--gray-50), white);
  padding: 5rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-text {
  animation-delay: 0.3s;
}

.heading {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.text-gradient {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--primary-color));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: textGradient 5s linear infinite;
}

.subheading {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--gray-600);
  margin-bottom: 2rem;
}

/* Code Container */
.hero-code {
  position: relative;
}

.code-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
}

.code-container:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  z-index: 0;
}

.circle-1 {
  bottom: -1.5rem;
  right: -1.5rem;
  height: 6rem;
  width: 6rem;
  background-color: var(--primary-color);
  animation: floating 4s ease-in-out infinite;
}

.circle-2 {
  top: -1.5rem;
  left: -1.5rem;
  height: 4rem;
  width: 4rem;
  background-color: var(--secondary-color);
  animation: floating 4s ease-in-out infinite;
  animation-delay: 0.5s;
}

.circle-3 {
  top: 50%;
  right: 0;
  transform: translateX(50%);
  height: 3rem;
  width: 3rem;
  background-color: var(--primary-light);
  opacity: 0.1;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 48rem;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-100);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-light);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.feature-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: var(--gray-600);
  line-height: 1.6;
}

/* Getting Started Section */
.getting-started-section {
  padding: 5rem 0;
}

.code-demo-container {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 48rem;
  margin: 0 auto;
}

.code-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--gray-100);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.code-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

.code-title {
  color: var(--gray-600);
  font-size: 0.875rem;
}

.code-block {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  background-color: #2a2a2a;
  color: white;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  border-radius: 0 0 0.5rem 0.5rem;
}

.code-footer {
  padding: 1.5rem;
  text-align: center;
}

/* CTA Section */
.cta-section {
  background-color: var(--primary-color);
  padding: 5rem 0;
  color: white;
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
}

.cta-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 32rem;
  margin: 0 auto 2.5rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* 动画 */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  opacity: 0;
  transform: translateX(20px);
  animation: fadeInRight 0.8s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.scroll-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.pulse-animation {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 打字机效果 */
.typewriter-effect {
  position: relative;
  overflow: hidden;
  margin: 0;
  background-color: #2a2a2a;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.typewriter-effect::after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  animation: typing 3s steps(60) forwards;
  animation-delay: 1s;
}

/* 动画关键帧 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInLeft {
  from { 
    opacity: 0;
    transform: translateX(-20px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from { 
    opacity: 0;
    transform: translateX(20px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes typing {
  from { width: 100%; }
  to { width: 0; }
}

@keyframes textGradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* 媒体查询 */
@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-code {
    order: -1;
  }
  
  .heading {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .heading {
    font-size: 2rem;
  }
  
  section {
    padding: 3rem 0;
  }
}

/* JS 辅助类 - 当元素可见时添加 */
.scroll-fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script>
export default {
  mounted() {
    // 添加滚动监听，触发动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // 监听所有需要滚动动画的元素
    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });
    
    // 设置页面标题
    document.title = 'VexDB - 高性能向量数据库';
  }
}
</script>


