# Zadanie

Utwórz komponent klasowy `App`, w który będzie zawierał dwa elementy:

- `Button`:
  - po kliknięciu w button paragraf będzie się pokazywał, a po ponownym ukrywał. Stwórz stan, który będzie się zmieniał na `onClicku`, np.:

```
    this.state = {
    toggleVisibility: false
    }
```

- `Paragraf` z napisem `A kuku!`:
  - paragraf będzie domyślnie ukryty za pomocą `display: none` (skorzystaj z dynamicznie nadawanego `className` w zależności od stanu, który został wcześniej stworzony i stworzonych klas w `App.css`)
