import styles from './../page.module.css';
function handleSubmit() {
    
}

export default function SearchBar() {
    return (
        <div className={styles.input_card}>
            <form id='cardSearch' onSubmit={handleSubmit}>
                <input type='search' name='searchBar' id='searchBar' className={styles.input_card} />
                <button type='button' name='submitSearch' id='submitSearch' className={styles.submit_button}>Search!</button>
            </form>
        </div>
    )
}