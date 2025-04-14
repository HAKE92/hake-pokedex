interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}




function NavBar() {
    return <nav>hello, world!</nav>;
    <nav>
        {/* plus de boutons en dur ! */}
        <button>bulbasaur</button>
        <button>charmander</button>
        <button>squirtle</button>
        <button>pikachu</button>
        <button>mew</button>
        {pokemonList.map((onePokemonFromTheList) => (
            <button
                key={onePokemonFromTheList.name}
                type="button"
                onClick={() => setPokemonName(onePokemonFromTheList.name)}
            >
                {onePokemonFromTheList.name}
            </button>
        ))}
    </nav>














}

export default NavBar;