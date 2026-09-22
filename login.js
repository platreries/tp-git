function login(username, password) {
    if (!username || !password) {
        console.log("Identifiants manquants");
        return false;
    }

    console.log("Tentative de connexion pour " + username);
    return true;
}
