function saveMyContact() {
    console.log("버튼이 클릭되었습니다!"); // 이 줄 추가
    const name = "장학생";
// contact.js
function saveMyContact() {
    const name = "장학생";
    const phone = "010-0000-0000";
    const email = "100eunoia@naver.com";

    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // 안드로이드: 시스템 연락처 추가 화면 호출
        window.location.href = `intent://#Intent;action=android.intent.action.INSERT;MIME_TYPE=vnd.android.cursor.dir/contact;S.name=${name};S.phone=${phone};S.email=${email};end`;
    } else {
        // 아이폰/기타: vCard 생성 및 다운로드 자동 실행
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
        URL.revokeObjectURL(url);
    }
}
