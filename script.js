// Đợi toàn bộ trang tải xong rồi mới chạy hiệu ứng
window.addEventListener('load', () => {

    // Đặt trạng thái ban đầu cho các đối tượng (ẩn đi)
    gsap.set('.person-photo', { opacity: 0, x: -100 });
    gsap.set('.speech-bubble', { opacity: 0, y: 50 });
    gsap.set('.action-buttons', { opacity: 0, y: 50 });
    gsap.set('.welcome-title-overlay', { opacity: 0, y: 50 });
    gsap.set('.deco-element', { opacity: 0, scale: 0.5 });
    
    // Tạo một chuỗi hiệu ứng (timeline)
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Bắt đầu chạy các hiệu ứng theo thứ tự
    tl.to('.person-photo', { opacity: 1, x: 0, duration: 1 })
      .to('.speech-bubble', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6") // Bắt đầu sớm hơn 0.6s
      .to('.action-buttons', { opacity: 1, y: 0, duration: 0.8 }, "<0.2") // Bắt đầu sau hiệu ứng trước 0.2s
      .to('.welcome-title-overlay', { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to('.deco-element', { 
          opacity: 1, 
          scale: 1, 
          duration: 0.7,
          stagger: 0.1 // Hiệu ứng xuất hiện lần lượt cho các lá cây
      }, "-=0.8");
});

// Đợi toàn bộ trang tải xong rồi mới chạy tất cả hiệu ứng
window.addEventListener('load', () => {

    // --- HIỆU ỨNG BANNER KHI TẢI TRANG (Giữ nguyên) ---
    // Đặt trạng thái ban đầu cho các đối tượng (ẩn đi)
    gsap.set('.person-photo', { opacity: 0, x: -100 });
    gsap.set('.speech-bubble', { opacity: 0, y: 50 });
    gsap.set('.action-buttons', { opacity: 0, y: 50 });
    gsap.set('.welcome-title-overlay', { opacity: 0, y: 50 });
    gsap.set('.deco-element', { opacity: 0, scale: 0.5 });
    
    // Tạo một chuỗi hiệu ứng (timeline)
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Bắt đầu chạy các hiệu ứng banner theo thứ tự
    tl.to('.person-photo', { opacity: 1, x: 0, duration: 1 })
      .to('.speech-bubble', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to('.action-buttons', { opacity: 1, y: 0, duration: 0.8 }, "<0.2")
      .to('.welcome-title-overlay', { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to('.deco-element', { 
          opacity: 1, 
          scale: 1, 
          duration: 0.7,
          stagger: 0.1
      }, "-=0.8");


    // ====================================================================
    // --- HIỆU ỨNG XUẤT HIỆN KHI CUỘN TRANG (PHIÊN BẢN NÂNG CẤP) ---
    // ====================================================================
    
    // Đăng ký plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hàm chung để tạo hiệu ứng cho một nhóm phần tử
    const animateOnScroll = (selector, staggerAmount = 0) => {
        gsap.from(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "top 85%", // Bắt đầu khi 85% của phần tử vào màn hình
                toggleActions: "play none none none", // Chạy 1 lần rồi thôi
            },
            opacity: 0,
            y: 70, // Trượt lên từ dưới
            duration: 1,
            ease: "power3.out",
            stagger: staggerAmount // Hiệu ứng xuất hiện lần lượt
        });
    };

    // Áp dụng hiệu ứng cho từng nhóm phần tử cụ thể
    animateOnScroll(".section-title");
    animateOnScroll(".about-intro-area");
    animateOnScroll(".about-details-area");
    
    // Áp dụng hiệu ứng so le cho các thẻ portfolio và services
    animateOnScroll(".portfolio-item", 0.15); 
    animateOnScroll(".flip-card, .card-item", 0.15); // Dùng cho cả 2 loại thẻ bạn có
    
});