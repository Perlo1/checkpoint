//filtro con letra A
function filterStringsContaining(array) {
    const filteredArray = array.filter((str) => str.toLowerCase().includes("a"));

    return filteredArray;
}

const stringArray = ["apple", "banana", "orange", "kiwi"]

const resultArray = filterStringsContaining(stringArray)
console.log(resultArray);


//repos github
async function getGithubRepos(username) {
    try {
        const response = await fetch("https://api.github.com/users/Perlo1/repos");
        const repositories = await response.json();
        return repositories;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function fetchData() {
    console.log(await getGithubRepos());
}

fetchData()

