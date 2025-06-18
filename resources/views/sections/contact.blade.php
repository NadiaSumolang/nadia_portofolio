<!-- <section class="contact" id="kontak">
    <h2 class="section-heading with-icon">
         <img src="images/kontak.png" class="ikon-bintang" />
        Hubungi Saya
    </h2>
    <div class="contact-container">
        <form class="contact-form" id="contactForm">
            <div class="form-group">
                <label for="name" class="form-label">Nama Anda</label>
                <input type="text" id="name" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Pesan</label>
                <textarea id="message" class="form-textarea" required></textarea>
            </div>

            <button type="submit" class="submit-btn">
                <i class="fas fa-paper-plane"></i> Kirim Pesan
            </button>
        </form>
    </div>
</section> -->

<section class="contact" id="kontak">
    <h2 class="section-heading with-icon">
        <img src="images/kontak.png" class="ikon-bintang" alt="Contact Icon" />
        Hubungi Saya
    </h2>
    <div class="contact-container">
        <form class="contact-form" id="contactForm" action="https://formspree.io/f/xblyyowg" method="POST">
            <div class="form-group">
                <label for="name" class="form-label">Nama Anda</label>
                <input type="text" id="name" name="name" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Pesan</label>
                <textarea id="message" name="message" class="form-textarea" required></textarea>
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">
                <span id="submitText"><i class="fas fa-paper-plane"></i> Kirim Pesan</span>
                <div class="loading-spinner" id="loadingSpinner"></div>
            </button>
        </form>
    </div>
    
    <!-- Notification Container -->
    <div id="notification" class="notification">
        <div class="notification-content">
            <span class="notification-icon"></span>
            <span class="notification-message"></span>
        </div>
    </div>
</section>