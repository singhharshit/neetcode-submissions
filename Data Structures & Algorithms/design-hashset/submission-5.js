class MyHashSet {
    constructor() {
        this.setSize=1000
        this.buckets=new Array(this.setSize)
        for(let i=0;i<this.setSize;i++)
        {
            this.buckets[i]=[]
        }
    }

    hash(key){
        let bucket=key%this.setSize
        return bucket
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const bucket=this.hash(key)
        if(!this.buckets[bucket].includes(key)){
            this.buckets[bucket].push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucket=this.hash(key)
        const idx=this.buckets[bucket].indexOf(key)
        if(idx!==-1)
        {
            this.buckets[bucket].splice(idx,1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const bucket=this.hash(key)
        if(this.buckets[bucket].includes(key))return true
        return false
    }
}
