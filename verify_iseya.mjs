import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Screenshot: Hero
await page.screenshot({ path: 'verify_hero.png', fullPage: false });

// Check hero elements
const heroHeadline = await page.locator('h1').first().textContent();
const ctaButtons = await page.locator('button, a').filter({ hasText: /Order Now|View Menu/i }).count();
const floatingCards = await page.locator('.glass-card').count();
console.log('HERO headline:', heroHeadline?.trim().slice(0, 80));
console.log('HERO CTA buttons visible:', ctaButtons);
console.log('HERO floating glass-cards:', floatingCards);

// Scroll to featured products
await page.locator('#menu').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
const productCards = await page.locator('#menu .group').count();
console.log('PRODUCTS cards:', productCards);
await page.screenshot({ path: 'verify_products.png', fullPage: false });

// Scroll to why choose us
await page.locator('#why-us').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
const whyCards = await page.locator('#why-us [class*="rounded-3xl"]').count();
console.log('WHY-US feature cards:', whyCards);
await page.screenshot({ path: 'verify_why.png', fullPage: false });

// Scroll to best sellers
await page.locator('#best-sellers').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
const bestSellerCards = await page.locator('#best-sellers .group').count();
console.log('BEST-SELLERS cards visible:', bestSellerCards);
await page.screenshot({ path: 'verify_bestsellers.png', fullPage: false });

// Test carousel next button
const nextBtn = page.locator('#best-sellers button[aria-label="Next"]');
if (await nextBtn.count() > 0) {
  await nextBtn.click();
  await page.waitForTimeout(600);
  console.log('BEST-SELLERS carousel next: clicked ok');
  await page.screenshot({ path: 'verify_bestsellers_next.png', fullPage: false });
}

// Scroll to testimonials
await page.locator('#testimonials').scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
const testimonialCard = await page.locator('#testimonials .glass-card').count();
console.log('TESTIMONIALS card visible:', testimonialCard);
await page.screenshot({ path: 'verify_testimonials.png', fullPage: false });

// Scroll to promo
await page.locator('#promo').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
const promoText = await page.locator('#promo').textContent();
const hasCountdown = promoText?.includes('Days') && promoText?.includes('Hours');
const hasCode = promoText?.includes('ISEYA20');
console.log('PROMO has countdown:', hasCountdown);
console.log('PROMO has promo code:', hasCode);
await page.screenshot({ path: 'verify_promo.png', fullPage: false });

// Scroll to gallery
await page.locator('#gallery').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
const galleryImages = await page.locator('#gallery img').count();
console.log('GALLERY images:', galleryImages);
await page.screenshot({ path: 'verify_gallery.png', fullPage: false });

// Scroll to footer
await page.locator('#footer').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
const newsletterInput = await page.locator('#footer input[type="email"]').count();
const subscribeBtn = await page.locator('#footer button').filter({ hasText: /subscribe/i }).count();
console.log('FOOTER newsletter input:', newsletterInput);
console.log('FOOTER subscribe button:', subscribeBtn);
await page.screenshot({ path: 'verify_footer.png', fullPage: false });

// Test newsletter form submission
await page.locator('#footer input[type="email"]').fill('test@example.com');
await page.locator('#footer button').filter({ hasText: /subscribe/i }).click();
await page.waitForTimeout(800);
const footerContent = await page.locator('#footer').textContent();
console.log('FOOTER subscribe success:', footerContent?.includes('Thank you'));
await page.screenshot({ path: 'verify_footer_subscribed.png', fullPage: false });

// Test dark mode toggle — scroll back to top
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
const darkToggle = page.locator('button[aria-label="Toggle theme"]').first();
await darkToggle.click();
await page.waitForTimeout(1000);
const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
console.log('DARK MODE toggled:', isDark);
await page.screenshot({ path: 'verify_darkmode.png', fullPage: false });
await darkToggle.click();
await page.waitForTimeout(500);

// Mobile view
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: 'verify_mobile.png', fullPage: false });
const mobileMenuBtn = await page.locator('button[aria-label="Toggle menu"]').count();
console.log('MOBILE hamburger button:', mobileMenuBtn);
if (mobileMenuBtn > 0) {
  await page.locator('button[aria-label="Toggle menu"]').click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verify_mobile_menu.png', fullPage: false });
  console.log('MOBILE menu opened ok');
}

await browser.close();
console.log('DONE');
