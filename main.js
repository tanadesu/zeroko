// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a=>{
	a.addEventListener('click',e=>{
		const id = a.getAttribute('href'); if(!id || id==='#') return;
		const el = document.querySelector(id); if(!el) return;
		e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'});
	})
})

// LINE登録ボタン（ダミー挙動）
document.getElementById('line')?.addEventListener('click',function(e){
	e.preventDefault(); alert('LINE登録は学校公式の導線へ。ここはサンプルです。');
})

// お知らせボタン（現在は表示のみ）
document.getElementById('news-link')?.addEventListener('click',function(e){
	e.preventDefault(); alert('現在はお知らせがありません');
})
document.getElementById('news-link-floating')?.addEventListener('click',function(e){
	e.preventDefault(); alert('現在はお知らせがありません');
})

// お問い合わせフォーム（ダミー挙動）
document.getElementById('contact-form-dummy')?.addEventListener('submit',function(e){
	e.preventDefault();
	const message = document.getElementById('contact-message')?.value || '';
	const triggers = ['334','３３４','３３−４','33-4'];
	const tigerTriggers = ['立浪','立浪和義','たつなみ','打つ方はなんとかします','打つ方は難とかします','素晴らしい先輩','素晴らしい監督'];
	const battlerTriggers = ['バトルフェイス','戦う顔','京田','中日のショート'];
	const hit = triggers.some(t => message.includes(t));
	const tigerHit = tigerTriggers.some(t => message.includes(t));
	const battlerHit = battlerTriggers.some(t => message.includes(t));
	if (battlerHit) {
		alert('お前、変わらんかったな');
		return;
	}
	if (tigerHit) {
		alert('ﾊﾟｧﾝ!');
		return;
	}
	if (hit) {
		alert('なんでや！\n阪神\n関係ないやろ！');
		return;
	}
	alert('送信はダミーです。公式フォームからお申し込みください。');
});

// ページロード時にトップに戻る
window.addEventListener('load', () => {
	window.scrollTo(0, 0);
});

// 固定ボタンの表示制御
window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const floating = document.getElementById('floating-buttons');
	if (window.scrollY > header.offsetHeight) {
		floating.style.display = 'flex';
		setTimeout(() => floating.style.opacity = '1', 10); // 少し遅らせてフェードイン
	} else {
		floating.style.opacity = '0';
		setTimeout(() => floating.style.display = 'none', 300); // transition後に非表示
	}
});

// （任意）Google Analytics / Search Console の設置例（サンプル）。実際に使う場合は公式ドキュメントに従ってください。
// 例（gtag.js を読み込んだ上で以下を呼ぶ）：
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments)}
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXX');
