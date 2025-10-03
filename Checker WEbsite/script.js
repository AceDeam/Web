document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen pertanyaan FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Tambahkan event listener ke setiap pertanyaan
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Dapatkan jawaban yang sesuai dengan pertanyaan yang diklik
            const answer = this.nextElementSibling;
            // Dapatkan ikon chevron di pertanyaan
            const icon = this.querySelector('.faq-icon');
            
            // Periksa apakah jawaban saat ini sudah terbuka
            const isOpen = answer.classList.contains('active');
            
            // Tutup semua jawaban dan reset ikon
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            document.querySelectorAll('.faq-question .faq-icon').forEach(icn => {
                icn.style.transform = 'rotate(0deg)';
            });
            
            // Jika jawaban belum terbuka, buka jawaban ini
            if (!isOpen) {
                answer.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});