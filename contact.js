function saveMyContact() {
    const name = "장학생";
    const phone = "010-0000-0000";
    const email = "100eunoia@naver.com";

    // 사용자 기기 판단
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
        // 안드로이드: 인텐트 방식으로 연락처 앱 호출
        const intentUrl = `intent://#Intent;action=android.intent.action.INSERT;MIME_TYPE=vnd.android.cursor.dir/contact;S.name=${encodeURIComponent(name)};S.phone=${encodeURIComponent(phone)};S.email=${encodeURIComponent(email)};end`;
        window.location.href = intentUrl;
    } else {
        // 아이폰 및 PC: vCard 다운로드 유도
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contact.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
