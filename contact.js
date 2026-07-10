// contact.js
function saveMyContact() {
    console.log("연락처 저장 함수가 실행되었습니다."); // 작동 확인용 로그

    const name = "장학생";
    const phone = "010-0000-0000";
    const email = "100eunoia@naver.com";

    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // 안드로이드: 시스템 연락처 추가 화면 호출
        const intentUrl = `intent://#Intent;action=android.intent.action.INSERT;MIME_TYPE=vnd.android.cursor.dir/contact;S.name=${encodeURIComponent(name)};S.phone=${encodeURIComponent(phone)};S.email=${encodeURIComponent(email)};end`;
        window.location.href = intentUrl;
    } else {
        // 아이폰/기타: vCard 데이터 생성 및 다운로드
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        // 아이폰/사파리 대응을 위해 직접 이동
        window.location.href = url;
        
        // 메모리 해제는 약간의 시간차를 두고 실행
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
}
