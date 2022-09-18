try:
    bölünen = int(input("Bölünen sayıyı giriniz: "))
    bölen = int(input("Bölen sayıyı giriniz: "))
    sonuç = bölünen / bölen
except ValueError:
    print("Lütfen sadece sayı giriniz.")
except ZeroDivisionError:
    print("Bölen sıfır olamaz.")
finally:
    print("Sonuç:", sonuç)
