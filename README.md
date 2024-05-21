# Wellcome To Clash Simaster

Selamat datang di github simaster by Yusuf Tutorial Channel.

Struktur ini sudah rangkumkan untuk ke semua file backup saya.

## Struktur Single Modem

```
openclash
|
|___ backup
|      |___ simaster.yaml
|
|___ config
|      |___ simaster.yaml
|
|___ core
|      |___ clash
|      |___ clash_meta
|      |___ clash_tun
|
|___ custom
|
|___ game_rules
|
|___ history
|      |___ simaster.db
|
|___ proxy_provider
|      |___ modem1.yaml
|
|___ rule_provider
|      |___ Bank.yaml
|      |___ Chat.yaml
|      |___ Game.yaml
|      |___ Iklan1.yaml
|      |___ Iklan2.yaml
|      |___ Iklam3.yaml
|      |___ Olshop.yaml
|      |___ Porn.yaml
|      |___ Sosmed.yaml
|      |___ Stream.yaml
|
|___ Country.mmdb
|
|___ GeoIP.dat
|
|___ GeoSite.dat
|
|___ accelerated-domains.china.conf
|
|___ cache.db
|
|___ china_ip6_route.ipset
|
|___ china_ip_route.ipset
|
|___ clash
|
|___ openclash
|
|___ simaster.yaml
```

## Struktur Loadbalance

```
openclash
|
|___ backup
|      |___ simaster.yaml
|
|___ config
|      |___ simaster.yaml
|
|___ core
|      |___ clash
|      |___ clash_meta
|      |___ clash_tun
|
|___ custom
|
|___ game_rules
|
|___ history
|      |___ simaster.db
|
|___ proxy_provider
|      |___ modem1.yaml
|      |___ modem2.yaml
|
|___ rule_provider
|      |___ Bank.yaml
|      |___ Chat.yaml
|      |___ Game.yaml
|      |___ Iklan1.yaml
|      |___ Iklan2.yaml
|      |___ Iklam3.yaml
|      |___ Olshop.yaml
|      |___ Porn.yaml
|      |___ Sosmed.yaml
|      |___ Stream.yaml
|
|___ Country.mmdb
|
|___ GeoIP.dat
|
|___ GeoSite.dat
|
|___ accelerated-domains.china.conf
|
|___ cache.db
|
|___ china_ip6_route.ipset
|
|___ china_ip_route.ipset
|
|___ clash
|
|___ openclash
|
|___ simaster.yaml
```

## Pasang Backup

Pergi ke terminal openwrt dan ketikkan perintah berikut:

### perintah single modem

```
cd /root
git clone https://github.com/yusuftutorial/openclash.git
tar -czf Simaster-Backup-20Mei2024.tar.gz
cd /root/Simaster-Backup-20Mei2024
mv openclash /etc
```

### perintah loadbalance modem

```
cd /root
git clone https://github.com/yusuftutorial/openclash.git
tar -czf Simaster-Loadbalance-20Mei2024.tar.gz
cd /root/Simaster-Loadbalance-20Mei2024
mv openclash /etc
```

## Atur akun

masuk `Config Editor` lalu pergi ke folder `proxy_provider` yang ada di dalam folder `openclash` kemudian jika sudah mengisi tinggal pergi ke overview dan jalankan openclash
