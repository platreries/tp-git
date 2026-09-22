function login(username, userPassword) {
    if (!username || !userPassword) {
        console.log("Identifiants manquants");
        return false;
    }

    console.log("Tentative de connexion pour " + username);
    return true;
}
