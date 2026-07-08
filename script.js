name.textContent=CONFIG.name;company.textContent=CONFIG.company;profileImg.src=CONFIG.profileImage;tag1.textContent=CONFIG.tags[0];tag2.textContent=CONFIG.tags[1];tag3.textContent=CONFIG.tags[2];call.href='tel:'+CONFIG.phone;gmail.href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(CONFIG.email);blog.href=CONFIG.blog;youtube.href=CONFIG.youtube;function saveContact(){const v=`BEGIN:VCARD
VERSION:3.0
FN:${CONFIG.name}
ORG:${CONFIG.company}
TEL:${CONFIG.phone}
EMAIL:${CONFIG.email}
END:VCARD`;const b=new Blob([v],{type:'text/vcard'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='contact.vcf';a.click();}