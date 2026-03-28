var expect = function(val) {
    return {
        toBe : (a) => {
            if(val === a) return true;
            else if (val !== a) throw new Error("Not Equal");
        },
        notToBe : (b)=>{
            if(val !== b) return true;
            else if (val === b) throw new Error("Equal");
        }
    }
};
