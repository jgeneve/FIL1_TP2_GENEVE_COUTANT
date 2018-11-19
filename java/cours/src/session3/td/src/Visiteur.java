interface Visiteur<T> {
    T casVide();
    T casCons(char lettre, T reste);
}
