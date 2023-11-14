class TrieNode {
    constructor() {
        this.children = {}
        this.isWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    addWord(word) {
        let node = this.root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.isWord = true
    }

    search(word) {
        function dfs(node, i) {
            if (i === word.length) {
                return node.isWord
            }

            if (word[i] === '.') {
                for (let char of Object.keys(node.children)) {
                    if (dfs(node.children[char], i + 1)) {
                        return true
                    }
                }

                return false
            }
            else {
                if (!(word[i] in node.children)) {
                    return false
                }

                return dfs(node.children[word[i]], i + 1)
            }
        }

        return dfs(this.root, 0)
    }
}