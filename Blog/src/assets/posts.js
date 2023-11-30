export const allPosts = [
  {
    id: 0,

    tarih: "30 Ekim 2023",
    etiket: "Yazılım",
    baslik: " React useState and useEffect Hooks   ",
    metin: `<p>useState Hook:</p><p>useState, fonksiyonel bileşenlerde state tanımlamak için kullanılır. State, bir bileşenenin durumu veya verileri depolamasını sağlar ve bu verilerin zaman içinde nasıl değiştiğini izler. useState ile birlikte gelen bir fonksiyonu çağırarak, bir state değişkeni ve bu değişkeni güncellemek için bir fonksiyon elde edersiniz.</p><p>Örnek bir kullanım:</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

     <span class="hljs-keyword">function</span> <span class="hljs-title function_">Counter</span>() {
     &nbsp;<span class="hljs-keyword">const</span> [count, setCount] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">0</span>);
     
     &nbsp;<span class="hljs-keyword">return</span> (
     &nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
     &nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Count: {count}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
     &nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setCount(count + 1)}&gt;
     &nbsp;&nbsp;&nbsp;&nbsp;Artır
     &nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
     &nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
     &nbsp;);
     }
     </pre><p><br></p><p>Yukarıdaki örnekte, count adında bir state değişkeni ve bu değişkeni güncellemek için setCount adında bir fonksiyon tanımlanmıştır.</p><p>useEffect Hook:</p><p>useEffect, bileşenin render edilmesinden sonra çalışacak olan bir fonksiyonu tanımlamanızı sağlar. Genellikle, yan etkileri (API çağrıları, abonelikler, vs.) işlemek için kullanılır. Bu, class bileşenlerinde componentDidMount, componentDidUpdate ve componentWillUnmount yaşam döngüsü metodlarını bir araya getirerek bir alternatif sunar.</p><p>Örnek bir kullanım:</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
     
     <span class="hljs-keyword">function</span> <span class="hljs-title function_">ExampleComponent</span>() {
     &nbsp;<span class="hljs-keyword">const</span> [data, setData] = <span class="hljs-title function_">useState</span>([]);
     
     &nbsp;<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
     &nbsp;&nbsp;<span class="hljs-comment">// Bu kod, bileşen monte edildiğinde çalışır</span>
     &nbsp;&nbsp;<span class="hljs-title function_">fetchData</span>();
     &nbsp;}, []); <span class="hljs-comment">// Boş bağımlılık dizisi, yalnızca bileşen monte edildiğinde çalışmasını sağlar</span>
     
     &nbsp;<span class="hljs-keyword">const</span> <span class="hljs-title function_">fetchData</span> = <span class="hljs-keyword">async</span> () =&gt; {
     &nbsp;&nbsp;<span class="hljs-keyword">try</span> {
     &nbsp;&nbsp;&nbsp;<span class="hljs-comment">// API çağrısı veya diğer yan etkileri gerçekleştirin</span>
     &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(<span class="hljs-string">'https://example.com/api/data'</span>);
     &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span> resultData = <span class="hljs-keyword">await</span> result.<span class="hljs-title function_">json</span>();
     &nbsp;&nbsp;&nbsp;<span class="hljs-title function_">setData</span>(resultData);
     &nbsp;&nbsp;} <span class="hljs-keyword">catch</span> (error) {
     &nbsp;&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(<span class="hljs-string">'Veri getirme hatası:'</span>, error);
     &nbsp;&nbsp;}
     &nbsp;};
     
     &nbsp;<span class="hljs-keyword">return</span> (
     &nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
     &nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Veri: {JSON.stringify(data)}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
     &nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
     &nbsp;);
     }
     </pre><p>Yukarıdaki örnekte, useEffect kullanarak bileşen monte edildiğinde fetchData fonksiyonunu çağırıyoruz.</p><p>Bu iki hook'u kullanarak, fonksiyonel bileşenlerde state yönetimini ve yaşam döngüsü olaylarına müdahale etmeyi kolaylaştırabilirsiniz.</p><p><br></p>`,
  },

  {
    id: 1,

    tarih: "30 Ekim 2023",
    etiket: "Yazılım",
    baslik: " React derinlemesi useEffect  ",
    metin: `
    <h2>useEffect</h2><p> React'ta yan etkileri (side effects) yönetmek için kullanılan bir Hook'tur. Yan etkiler, örneğin ağ istekleri yapma, veritabanı sorgularını işleme, abonelikleri yönetme gibi işlemleri ifade eder. Bu tür işlemler
    genellikle bir bileşenin yaşam döngüsü içinde gerçekleşir.</p><p>useEffect, bir işlev ve bağımlılıklar (dependencies) listesi alır. Bu işlev, bileşen her render edildiğinde çalışır. Ancak, bağımlılıklar listesi verildiğinde, sadece bu bağımlılıkların değerleri değiştiğinde veya bileşen ilk kez render edildiğinde çalışır.</p><p>İşte basit bir örnek:</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">ExampleComponent</span> = () =&gt; {
      <span class="hljs-comment">// State tanımla</span>
      <span class="hljs-keyword">const</span> [count, setCount] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">0</span>);
    
      <span class="hljs-comment">// useEffect kullanımı</span>
      <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-comment">// Bu kısım, bileşen her render edildiğinde çalışır</span>
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Component rendered'</span>);
    
        <span class="hljs-comment">// Temizleme fonksiyonu (clean-up function)</span>
        <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
          <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Component will unmount or dependencies changed'</span>);
        };
      }, [<span class="hljs-comment">/* dependencies */</span>]);
    
      <span class="hljs-comment">// State'i güncelleme</span>
      <span class="hljs-keyword">const</span> <span class="hljs-title function_">increment</span> = () =&gt; {
        <span class="hljs-title function_">setCount</span>(count + <span class="hljs-number">1</span>);
      };
    
      <span class="hljs-keyword">return</span> (
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Count: {count}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{increment}</span>&gt;</span>Increment<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      );
    };
    
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">ExampleComponent</span>;
    </pre><p><br></p><p>Bu örnekte, useEffect içindeki fonksiyon, her render işlemi sonrasında çalışacaktır. Eğer boş bir bağımlılıklar listesi bırakırsanız ([]), bu efekt sadece bileşenin monte edilme ve demonte edilme anlarında çalışacaktır. Bağımlılıklar listesine özel bir state eklerseniz, bu efekt sadece o state değiştiğinde çalışacaktır.</p><p>Temizleme fonksiyonu, bileşen demonte edildiğinde veya bağımlılıklar değiştiğinde çalışır. Bu, örneğin abonelikleri veya zamanlayıcıları temizleme gibi işlemler için kullanışlıdır.</p>
    `,
  },

  {
    id: 2,

    tarih: "30 Kasım 2023",
    etiket: "Yazılım",
    baslik: "Beyefendi ile  Kelime Tespiti ve Sansürleme ",
    metin: `<p>Öncelikle kütüphaneyi yüklememiz gerekiyor.</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">npm</span> i beyefendi
    </pre><p>Komutuyla npmi yükledikten sonra import etmeliyiz.</p><pre class="ql-syntax" spellcheck="false">import {checkFill} <span class="hljs-keyword">from</span> <span class="hljs-string">"beyefendi"</span>
    
    <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">isHaveBad</span> = <span class="hljs-title function_ invoke__">checkFill</span>({<span class="hljs-attr">text</span>:<span class="hljs-string">"word1"</span>}) <span class="hljs-comment">// return true</span>
    <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">filteredText</span> = <span class="hljs-title function_ invoke__">checkFill</span>({<span class="hljs-attr">text</span>:<span class="hljs-string">"word1"</span>,<span class="hljs-attr">returnType</span>:<span class="hljs-number">1</span>})  <span class="hljs-comment">// return '*****'</span>
    <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">filteredOptions</span> = <span class="hljs-title function_ invoke__">checkFill</span>({<span class="hljs-attr">text</span>:<span class="hljs-string">"word1"</span>,<span class="hljs-attr">addWords</span>:[<span class="hljs-string">"word5,word6"</span>],<span class="hljs-attr">deleteWords</span>:[<span class="hljs-string">"word1"</span>,<span class="hljs-string">"word2"</span>]}) <span class="hljs-comment">// return false</span>
    </pre><p>returnType default olarak 0dır. Bu şekilde checkFill fonksiyonuna bir text verdiğimizde defaultWords dizisindeki kelimelerden birini bulduğunda true dönecektir. Bu şekilde istenmeyen kelime tespiti yapılabilir.</p><p><br></p><p>returnType parametresini 1 olarak verdiğimizde ise verilen metindeki istenmeyen kelimeyi bulup kelime uzunluğu kadar * ile değiştirmektedir. Bu sayede daha önceden eklenmiş olan fakat görüntülenmemesini istediğiniz kelimeleri sansürleyebilirsiniz.</p><p><br></p><p>addWord parametresi ise bir dizi almaktadır. Dinamik olarak yeni kelimeler eklemek isterseniz bu parametreye dizi olarak verebilirsiniz. </p><p>deleteWords parametreside benzer şekilde dinamik olarak belirli kelimelerin filtreye takılmasını engellemek için kullanılabilmektedir.</p><p><br></p><p>Kütüphaneye <a href="https://www.npmjs.com/package/beyefendi" rel="noopener noreferrer" target="_blank">https://www.npmjs.com/package/beyefendi</a> adresinden erişebilirsiniz.</p><p><br></p>`,
  },
];
