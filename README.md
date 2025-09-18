# Siverek Belediyesi Envanter Takip Sistemi

Bu proje, Siverek Belediyesi için bir envanter takip sistemidir. Sistem, ürün ekleme, düzenleme, silme, listeleme ve raporlama gibi işlemleri yapabilmektedir.

## Özellikler

- Kullanıcı girişi (admin/admin123 ile giriş yapılabilir)
- Ürün ekleme, düzenleme ve silme
- Ürün listeleme ve arama
- Kategori bazında filtreleme
- Raporlama (Excel ve PDF dışa aktarma)
- Veri içe aktarma (Excel dosyasından)
- Kullanıcı yönetimi (sadece admin kullanıcıları)
- Ayarlar (karanlık mod, bildirimler)
- Otomatik veri temizleme (geçersiz ürünleri otomatik olarak kaldırır)

## Sayfalar

1. **Pano (index.html)** - Ana sayfa, genel istatistikler ve hızlı erişim
2. **Envanter Ekle (add-product.html)** - Yeni ürün ekleme sayfası
3. **Envanter Listesi (inventory-list.html)** - Tüm ürünleri listeleme ve yönetme
4. **Envanter Düzenle (edit-product.html)** - Ürün düzenleme sayfası
5. **Raporlar (reports.html)** - Raporlama ve dışa aktarma işlemleri
6. **Ayarlar (settings.html)** - Sistem ayarları ve kullanıcı yönetimi
7. **Giriş (login.html)** - Kullanıcı girişi sayfası

## Kullanılan Teknolojiler

- HTML5
- CSS3 (TailwindCSS)
- JavaScript (ES6+)
- localStorage (veri saklama)
- jsPDF (PDF dışa aktarma)
- xlsx (Excel dışa aktarma ve içe aktarma)

## Kurulum

1. Tüm dosyaları aynı klasöre indirin
2. index.html dosyasını tarayıcıda açın
3. admin/admin123 ile giriş yapın

## Kullanım

### Ürün Ekleme
1. "Envanter Ekle" sayfasına gidin
2. Ürün bilgilerini girin
3. "Düşük Stok Sınırı"nı belirleyin (varsayılan 10)
4. "Kaydet" butonuna tıklayın

### Ürün Düzenleme
1. "Envanter Listesi" sayfasına gidin
2. Düzenlemek istediğiniz ürünün yanındaki "Düzenle" butonuna tıklayın
3. Ürün bilgilerini güncelleyin
4. "Güncelle" butonuna tıklayın

### Veri Dışa Aktarma
1. "Envanter Listesi" veya "Raporlar" sayfasına gidin
2. "Excel" veya "PDF" butonuna tıklayın
3. Dosya otomatik olarak indirilecektir

### Veri İçe Aktarma
1. "Envanter Listesi" sayfasına gidin
2. "Yükle" butonuna tıklayın
3. Excel dosyasını seçin
4. Ürünler otomatik olarak sisteme eklenecektir

### Kullanıcı Yönetimi
1. "Ayarlar" sayfasına gidin
2. "Kullanıcı Yönetimi" bölümündeki "Yönet" butonuna tıklayın
3. Yeni kullanıcı ekleyin veya mevcut kullanıcıları silin

## Teknik Detaylar

### Veri Doğrulama
Sistem, geçersiz ürünleri otomatik olarak temizler:
- Boş isimli ürünler içe aktarılırken filtrelenir
- localStorage'daki geçersiz ürünler otomatik olarak kaldırılır
- Tüm işlemlerden önce veri temizliği yapılır

### Düşük Stok Yönetimi
- Her ürün için ayrı düşük stok sınırı ayarlanabilir
- Kritik stok seviyesi 5 adet olarak sabitlenmiştir
- Düşük stok uyarıları ürün bazlı çalışır

### Güvenlik
- Kullanıcı oturumları sessionStorage ile yönetilir
- Oturum kapatıldığında tüm oturum verileri silinir
- Admin olmayan kullanıcılar kullanıcı yönetimi bölümüne erişemez

## Notlar

- Tüm veriler tarayıcınızın localStorage'ında saklanır
- Farklı tarayıcılarda veya gizli modda veriler görünmeyebilir
- Verilerin kalıcı olması için aynı tarayıcıyı kullanmaya devam edin
- Excel içe aktarma için "envanter-import-template.xlsx" dosyasını şablon olarak kullanabilirsiniz

## Geliştirme

Bu proje açık kaynaklıdır ve geliştirilmeye açıktır. Herhangi bir katkıda bulunmak isterseniz, lütfen bir pull request gönderin.