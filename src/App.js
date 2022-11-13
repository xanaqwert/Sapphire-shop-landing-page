import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Sapphire Shop"
        description="Sapphire adalah aplikasi toko online yang mempermudah masyarakat untuk membeli produk impian mereka di zaman yang sudah penuh teknologi."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="UI/UX Lebih Pintar"
        description="Memiliki UI/UX yang lebih canggih dan modern, untuk mempermudah masyarakat."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="React Native Expo"
        description="Sapphire dibangun menggunakan Expo yang berjalan secara native di semua perangkat pengguna. Kamu dapat dengan mudah membawa aplikasi Saphhire ke tangan orang."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Kreatif dan Inovatif untuk memajukan Bangsa"
        description="Aplikasi ini berisi dua layar. Layar pertama mencantumkan semua Produk sedangkan layar kedua menampilkan detail Produk tertentu."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with AI by <span className="bold">©xanaqwert</span>
        </p>
      </div>
    </>
  );
};

export default App;
