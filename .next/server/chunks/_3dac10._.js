module.exports = {

"[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ItemType": ()=>ItemType,
    "LootRadius": ()=>LootRadius,
    "MapObjectSpawnMode": ()=>MapObjectSpawnMode,
    "ObjectDefinitions": ()=>ObjectDefinitions,
    "ObstacleSpecialRoles": ()=>ObstacleSpecialRoles
});
class ObjectDefinitions {
    bitCount;
    definitions;
    idStringToNumber = {};
    constructor(definitions){
        this.bitCount = Math.ceil(Math.log2(definitions.length));
        this.definitions = definitions;
        for(let i = 0, defLength = definitions.length; i < defLength; i++){
            const idString = definitions[i].idString;
            if (this.idStringToNumber[idString] !== undefined) {
                throw new Error(`Duplicated idString: ${idString}`);
            }
            this.idStringToNumber[idString] = i;
        }
    }
    reify(type) {
        return typeof type === "string" ? this.fromString(type) : type;
    }
    fromString(idString) {
        const id = this.idStringToNumber[idString];
        if (id === undefined) throw new Error(`Unknown idString: ${idString}`);
        return this.definitions[id];
    }
    writeToStream(stream, type) {
        stream.writeBits(this.idStringToNumber[typeof type === "string" ? type : type.idString], this.bitCount);
    }
    readFromStream(stream) {
        const id = stream.readBits(this.bitCount);
        if (id >= this.definitions.length) {
            console.warn(`ID out of range: ${id} (max: ${this.definitions.length - 1})`);
        }
        return this.definitions[id];
    }
    [Symbol.iterator]() {
        return this.definitions[Symbol.iterator]();
    }
}
let ItemType;
(function(ItemType) {
    ItemType[ItemType["Gun"] = 0] = "Gun";
    ItemType[ItemType["Ammo"] = 1] = "Ammo";
    ItemType[ItemType["Melee"] = 2] = "Melee";
    ItemType[ItemType["Throwable"] = 3] = "Throwable";
    ItemType[ItemType["Healing"] = 4] = "Healing";
    ItemType[ItemType["Armor"] = 5] = "Armor";
    ItemType[ItemType["Backpack"] = 6] = "Backpack";
    ItemType[ItemType["Scope"] = 7] = "Scope";
    ItemType[ItemType["Skin"] = 8] = "Skin";
})(ItemType || (ItemType = {}));
let ObstacleSpecialRoles;
(function(ObstacleSpecialRoles) {
    ObstacleSpecialRoles[ObstacleSpecialRoles["Door"] = 0] = "Door";
    ObstacleSpecialRoles[ObstacleSpecialRoles["Wall"] = 1] = "Wall";
    ObstacleSpecialRoles[ObstacleSpecialRoles["Window"] = 2] = "Window";
    ObstacleSpecialRoles[ObstacleSpecialRoles["Activatable"] = 3] = "Activatable";
})(ObstacleSpecialRoles || (ObstacleSpecialRoles = {}));
let MapObjectSpawnMode;
(function(MapObjectSpawnMode) {
    MapObjectSpawnMode[MapObjectSpawnMode["Grass"] = 0] = "Grass";
    /**
     * Grass, beach and river banks.
     */ MapObjectSpawnMode[MapObjectSpawnMode["GrassAndSand"] = 1] = "GrassAndSand";
    MapObjectSpawnMode[MapObjectSpawnMode["RiverBank"] = 2] = "RiverBank";
    MapObjectSpawnMode[MapObjectSpawnMode["River"] = 3] = "River";
    MapObjectSpawnMode[MapObjectSpawnMode["Beach"] = 4] = "Beach";
})(MapObjectSpawnMode || (MapObjectSpawnMode = {}));
const LootRadius = {
    [0]: 3.4,
    [1]: 2,
    [2]: 3,
    [3]: 3,
    [4]: 2.5,
    [5]: 3,
    [6]: 3,
    [7]: 3,
    [8]: 3
};

})()),
"[project]/vendor/suroi/common/src/utils/misc.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Timeout": ()=>Timeout,
    "cloneDeep": ()=>cloneDeep,
    "freezeDeep": ()=>freezeDeep,
    "isObject": ()=>isObject,
    "mergeDeep": ()=>mergeDeep
});
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const [source, ...rest] = sources;
    for(const _key in source){
        const key = _key;
        const [sourceProp, targetProp] = [
            source[key],
            target[key]
        ];
        if (isObject(targetProp)) {
            mergeDeep(targetProp, sourceProp);
            continue;
        }
        target[key] = sourceProp;
    }
    return mergeDeep(target, ...rest);
}
function cloneDeep(object) {
    if (!isObject(object)) return object;
    const clone = new (Object.getPrototypeOf(object)).constructor();
    for (const [key, desc] of Object.entries(Object.getOwnPropertyDescriptors(object))){
        const clonedProperty = object[key];
        desc.value = cloneDeep(clonedProperty);
        Object.defineProperty(clone, key, desc);
    }
    return clone;
}
function freezeDeep(object) {
    Object.freeze(object);
    for(const key in object){
        const value = object[key];
        if (typeof value === "object" && value !== null) {
            freezeDeep(value);
        }
    }
    return object;
}
class Timeout {
    callback;
    end;
    killed = false;
    constructor(callback, end){
        this.end = end;
        this.callback = callback;
    }
    kill() {
        this.killed = true;
    }
}

})()),
"[project]/vendor/suroi/common/src/utils/vector.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Vec": ()=>Vec
});
const Vec = Object.freeze({
    /**
     * Creates a new `Vector`
     * @param x The horizontal (x-axis) coordinate
     * @param y The vertical (y-axis) coordinate
     * @returns A new `Vector` object with the provided x and y coordinates
     */ create (x, y) {
        return {
            x,
            y
        };
    },
    /**
     * Adds two `Vector`s together
     * @param a The first `Vector`
     * @param b The second `Vector`
     * @returns A new `Vector` resulting from the addition of vectors `a` and `b`
     */ add (a, b) {
        return this.create(a.x + b.x, a.y + b.y);
    },
    /**
     * Adds two vectors together
     * @param a The first `Vector`
     * @param x The x-coordinate of the second vector
     * @param y The y-coordinate of the second vector
     * @returns A new `Vector` resulting from the addition of `a`, and `x` and `y`
     */ addComponent (a, x, y) {
        return this.create(a.x + x, a.y + y);
    },
    /**
     * Subtracts one `Vector` from another
     * @param a The `Vector` to be subtracted from
     * @param b The `Vector` to subtract
     * @returns A new `Vector` resulting from the subtraction of vector `b` from vector `a`
     */ sub (a, b) {
        return this.create(a.x - b.x, a.y - b.y);
    },
    /**
     * Multiplies a `Vector` by a scalar
     * @param a The `Vector` to be multiplied
     * @param n The scalar value to multiply the `Vector` by
     * @returns A new `Vector` resulting from the multiplication of vector `a` and scalar `n`
     */ scale (a, n) {
        return this.create(a.x * n, a.y * n);
    },
    /**
     * Clones a `Vector`
     * @param vector The `Vector` to be cloned
     * @returns A new `Vector` with the same components as the input `Vector`
     */ clone (vector) {
        return this.create(vector.x, vector.y);
    },
    /**
     * Rotates a `Vector` by a given angle
     * @param vector The `Vector` to be rotated
     * @param angle The angle in radians to rotate the `Vector` by
     * @returns A new `Vector` resulting from the rotation of the input `Vector` by the given angle
     */ rotate (vector, angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return this.create(vector.x * cos - vector.y * sin, vector.x * sin + vector.y * cos);
    },
    /**
     * Returns the squared length of a `Vector`
     * @param a The `Vector` to be measured
     * @returns The length of the `Vector` `a`, squared
     */ squaredLength (a) {
        return a.x * a.x + a.y * a.y;
    },
    /**
     * Returns the length of a `Vector`
     * @param a The vector to be measured
     * @returns The length of the `Vector` `a`
     */ length (a) {
        return Math.sqrt(Vec.squaredLength(a));
    },
    /**
     * Performs the dot product between two vectors, returning the result. This operation is commutative
     * @param a The first `Vector`
     * @param b The second `Vector`
     * @returns The result of performing the dot product using the component method
     */ dotProduct (a, b) {
        return a.x * b.x + a.y * b.y;
    },
    /**
     * Projects a `Vector` onto another
     * @param projected The `Vector` to be projected
     * @param projectOnto The `Vector` that will be projected onto
     * @returns A new `Vector` parallel to `projectOnto` which is the projection of `projected`
     */ project (projected, projectOnto) {
        return this.scale(projectOnto, this.dotProduct(projected, projectOnto) / this.squaredLength(projectOnto));
    },
    /**
     * Creates a new `Vector` parallel to the original, but whose length is 1
     * @param a The `Vector` to normalize
     * @param fallback A `Vector` to clone and return in case the normalization operation fails
     * @returns A `Vector` whose length is 1 and is parallel to the original vector
     */ normalizeSafe (a, fallback) {
        fallback ??= this.create(1.0, 0.0);
        const eps = 0.000001;
        const len = Vec.length(a);
        return len > eps ? {
            x: a.x / len,
            y: a.y / len
        } : Vec.clone(fallback);
    },
    /**
     * Creates a new `Vector` parallel to the original, but whose length is 1
     * @param a The `Vector` to normalize
     * @returns A `Vector` whose length is 1 and is parallel to the original vector
     */ normalize (a) {
        const eps = 0.000001;
        const len = Vec.length(a);
        return ("TURBOPACK compile-time truthy", 1) ? {
            x: a.x / len,
            y: a.y / len
        } : ("TURBOPACK unreachable", undefined);
    },
    /**
     * Returns the additive inverse of this vector; in other words, a `Vector` that, when added to this one, gives the zero vector
     * @param a The `Vector` to invert
     * @returns A `Vector` whose components are -1 multiplied by the corresponding component in the original `Vector`
     */ invert (a) {
        return this.create(-a.x, -a.y);
    },
    /**
     * Tests whether two `Vectors` are equal, within a certain tolerance
     * @param a The first `Vector`
     * @param b The second `Vector`
     * @param epsilon The largest difference in any component that will be accepted as being "equal"
     * @returns Whether or not the two vectors are considered equal with the given epsilon
     */ equals (a, b, epsilon = 0.001) {
        return Math.abs(a.x - b.x) <= epsilon && Math.abs(a.y - b.y) <= epsilon;
    },
    /**
     * Returns the angle between two vectors
     * @param a The first vector
     * @param b The second vector
     */ angleBetweenVectors (a, b) {
        return Math.acos((a.x * b.x + a.y * b.y) / Math.sqrt(Vec.length(a) * Vec.length(b)));
    },
    /**
     * Interpolate between two `Vector`s
     * @param start The start `Vector`
     * @param end The end `Vector`
     * @param interpFactor The interpolation factor ranging from 0 to 1
     *
     */ lerp (start, end, interpFactor) {
        return Vec.add(Vec.scale(start, 1 - interpFactor), Vec.scale(end, interpFactor));
    },
    /**
     * Takes a polar representation of a vector and converts it into a cartesian one
     * @param angle The vector's angle
     * @param magnitude The vector's length. Defaults to 1
     * @returns A new vector whose length is `magnitude` and whose direction is `angle`
     */ fromPolar (angle, magnitude = 1) {
        return {
            x: Math.cos(angle) * magnitude,
            y: Math.sin(angle) * magnitude
        };
    },
    /**
     * Add a `Vector` to another one and rotate it by the given orientation
     * @param position1 The initial `Vector`
     * @param position2 The `Vector` to add to the first one
     * @param orientation The orientation to rotate the second vector by
     * @return A new `Vector`
     */ addAdjust (position1, position2, orientation) {
        if (orientation === 0) return Vec.add(position1, position2);
        let xOffset, yOffset;
        switch(orientation){
            case 1:
                // noinspection JSSuspiciousNameCombination
                xOffset = position2.y;
                yOffset = -position2.x;
                break;
            case 2:
                xOffset = -position2.x;
                yOffset = -position2.y;
                break;
            case 3:
                xOffset = -position2.y;
                // noinspection JSSuspiciousNameCombination
                yOffset = position2.x;
                break;
        }
        return Vec.add(position1, Vec.create(xOffset, yOffset));
    }
});

})()),
"[project]/vendor/suroi/common/src/definitions/throwables.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Throwables": ()=>Throwables
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/vector.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Throwables = [
    {
        idString: "frag_grenade",
        name: "Frag Grenade",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Throwable,
        speedMultiplier: 0.92,
        cookSpeedMultiplier: 0.7,
        radius: 1,
        impactDamage: 1,
        obstacleMultiplier: 20,
        fuseTime: 4000,
        cookTime: 250,
        throwTime: 150,
        cookable: true,
        maxThrowDistance: 96,
        fireDelay: 500,
        image: {
            position: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(60, 43),
            angle: 60
        },
        detonation: {
            explosion: "frag_explosion"
        },
        animation: {
            pinImage: "proj_frag_pin",
            liveImage: "proj_frag",
            leverImage: "proj_frag_lever",
            cook: {
                leftFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(2.5, 0),
                rightFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(-0.5, 2.15)
            },
            throw: {
                leftFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(1.9, -1.75),
                rightFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(4, 2.15)
            }
        }
    },
    {
        idString: "smoke_grenade",
        name: "Smoke Grenade",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Throwable,
        speedMultiplier: 0.92,
        cookSpeedMultiplier: 0.7,
        radius: 1,
        impactDamage: 1,
        obstacleMultiplier: 20,
        cookable: false,
        fuseTime: 2000,
        cookTime: 250,
        throwTime: 150,
        maxThrowDistance: 96,
        image: {
            position: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(60, 43),
            angle: 60
        },
        detonation: {
            explosion: "smoke_explosion"
        },
        animation: {
            pinImage: "proj_smoke_pin",
            liveImage: "proj_smoke",
            leverImage: "proj_smoke_lever",
            cook: {
                cookingImage: "proj_smoke_nopin",
                leftFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(2.5, 0),
                rightFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(-0.5, 2.15)
            },
            throw: {
                leftFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(1.9, -1.75),
                rightFist: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(4, 2.15)
            }
        }
    }
];

})()),
"[project]/vendor/suroi/common/src/definitions/scopes.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Scopes": ()=>Scopes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Scopes = new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ObjectDefinitions"]([
    {
        idString: "1x_scope",
        name: "1x Scope",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope,
        zoomLevel: 48,
        noDrop: true,
        giveByDefault: true
    },
    {
        idString: "2x_scope",
        name: "2x Scope",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope,
        zoomLevel: 62
    },
    {
        idString: "4x_scope",
        name: "4x Scope",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope,
        zoomLevel: 83
    },
    {
        idString: "8x_scope",
        name: "8x Scope",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope,
        zoomLevel: 116
    },
    {
        idString: "15x_scope",
        name: "15x Scope",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope,
        zoomLevel: 178
    }
]);

})()),
"[project]/vendor/suroi/common/src/definitions/healingItems.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HealType": ()=>HealType,
    "HealingItems": ()=>HealingItems
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
let HealType;
(function(HealType) {
    HealType[HealType["Health"] = 0] = "Health";
    HealType[HealType["Adrenaline"] = 1] = "Adrenaline";
})(HealType || (HealType = {}));
const HealingItems = new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ObjectDefinitions"]([
    {
        idString: "gauze",
        name: "Gauze",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Healing,
        healType: 0,
        restoreAmount: 15,
        useTime: 3,
        useText: "Applying"
    },
    {
        idString: "medikit",
        name: "Medikit",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Healing,
        healType: 0,
        restoreAmount: 100,
        useTime: 6,
        useText: "Using"
    },
    {
        idString: "cola",
        name: "Cola",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Healing,
        healType: 1,
        restoreAmount: 25,
        useTime: 3,
        useText: "Drinking"
    },
    {
        idString: "tablets",
        name: "Tablets",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Healing,
        healType: 1,
        restoreAmount: 50,
        useTime: 5,
        useText: "Taking"
    }
]);

})()),
"[project]/vendor/suroi/common/src/definitions/ammos.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Ammos": ()=>Ammos
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Ammos = new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ObjectDefinitions"]([
    {
        idString: "12g",
        name: "12 gauge",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 20
    },
    {
        idString: "556mm",
        name: "5.56mm",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 60
    },
    {
        idString: "762mm",
        name: "7.62mm",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 60
    },
    {
        idString: "9mm",
        name: "9mm",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 90
    },
    {
        idString: "127mm",
        name: "12.7mm",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 10,
        hideUnlessPresent: true
    },
    {
        idString: "curadell",
        name: "Curadell",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 10,
        hideUnlessPresent: true
    },
    /*
    {
        idString: "50ae",
        name: ".50 AE",
        itemType: ItemType.Ammo
    }, */ // Ephemeral ammo types below
    {
        idString: "power_cell",
        name: "P.O.W.E.R. cell",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 10,
        ephemeral: true
    },
    {
        idString: "bb",
        name: "6mm BB",
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo,
        maxStackSize: 240,
        ephemeral: true
    }
]);

})()),
"[project]/vendor/suroi/common/src/constants.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnimationType": ()=>AnimationType,
    "DEFAULT_INVENTORY": ()=>DEFAULT_INVENTORY,
    "FireMode": ()=>FireMode,
    "GameConstants": ()=>GameConstants,
    "GasState": ()=>GasState,
    "InputActions": ()=>InputActions,
    "KillFeedMessageType": ()=>KillFeedMessageType,
    "KillType": ()=>KillType,
    "ObjectCategory": ()=>ObjectCategory,
    "PacketType": ()=>PacketType,
    "PlayerActions": ()=>PlayerActions,
    "SpectateActions": ()=>SpectateActions,
    "ZIndexes": ()=>ZIndexes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$ammos$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/definitions/ammos.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$healingItems$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/definitions/healingItems.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$scopes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/definitions/scopes.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$throwables$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/definitions/throwables.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
let ObjectCategory;
(function(ObjectCategory) {
    ObjectCategory[ObjectCategory["Player"] = 0] = "Player";
    ObjectCategory[ObjectCategory["Obstacle"] = 1] = "Obstacle";
    ObjectCategory[ObjectCategory["DeathMarker"] = 2] = "DeathMarker";
    ObjectCategory[ObjectCategory["Loot"] = 3] = "Loot";
    ObjectCategory[ObjectCategory["Building"] = 4] = "Building";
    ObjectCategory[ObjectCategory["Decal"] = 5] = "Decal";
    ObjectCategory[ObjectCategory["Parachute"] = 6] = "Parachute";
    ObjectCategory[ObjectCategory["ThrowableProjectile"] = 7] = "ThrowableProjectile";
    ObjectCategory[ObjectCategory["SyncedParticle"] = 8] = "SyncedParticle";
})(ObjectCategory || (ObjectCategory = {}));
let PacketType;
(function(PacketType) {
    PacketType[PacketType["Join"] = 0] = "Join";
    PacketType[PacketType["Joined"] = 1] = "Joined";
    PacketType[PacketType["Map"] = 2] = "Map";
    PacketType[PacketType["Update"] = 3] = "Update";
    PacketType[PacketType["Input"] = 4] = "Input";
    PacketType[PacketType["GameOver"] = 5] = "GameOver";
    PacketType[PacketType["Pickup"] = 6] = "Pickup";
    PacketType[PacketType["Ping"] = 7] = "Ping";
    PacketType[PacketType["Spectate"] = 8] = "Spectate";
    PacketType[PacketType["Report"] = 9] = "Report";
    PacketType[PacketType["MapPing"] = 10] = "MapPing";
})(PacketType || (PacketType = {}));
let AnimationType;
(function(AnimationType) {
    AnimationType[AnimationType["None"] = 0] = "None";
    AnimationType[AnimationType["Melee"] = 1] = "Melee";
    AnimationType[AnimationType["ThrowableCook"] = 2] = "ThrowableCook";
    AnimationType[AnimationType["ThrowableThrow"] = 3] = "ThrowableThrow";
    AnimationType[AnimationType["Gun"] = 4] = "Gun";
    AnimationType[AnimationType["GunAlt"] = 5] = "GunAlt";
    AnimationType[AnimationType["GunClick"] = 6] = "GunClick";
    AnimationType[AnimationType["LastShot"] = 7] = "LastShot";
})(AnimationType || (AnimationType = {}));
let KillFeedMessageType;
(function(KillFeedMessageType) {
    KillFeedMessageType[KillFeedMessageType["Kill"] = 0] = "Kill";
    KillFeedMessageType[KillFeedMessageType["KillLeaderAssigned"] = 1] = "KillLeaderAssigned";
    KillFeedMessageType[KillFeedMessageType["KillLeaderDead"] = 2] = "KillLeaderDead";
    KillFeedMessageType[KillFeedMessageType["KillLeaderUpdated"] = 3] = "KillLeaderUpdated";
})(KillFeedMessageType || (KillFeedMessageType = {}));
let GasState;
(function(GasState) {
    GasState[GasState["Inactive"] = 0] = "Inactive";
    GasState[GasState["Waiting"] = 1] = "Waiting";
    GasState[GasState["Advancing"] = 2] = "Advancing";
})(GasState || (GasState = {}));
let FireMode;
(function(FireMode) {
    FireMode[FireMode["Single"] = 0] = "Single";
    FireMode[FireMode["Burst"] = 1] = "Burst";
    FireMode[FireMode["Auto"] = 2] = "Auto";
})(FireMode || (FireMode = {}));
let InputActions;
(function(InputActions) {
    InputActions[InputActions["EquipItem"] = 0] = "EquipItem";
    InputActions[InputActions["EquipLastItem"] = 1] = "EquipLastItem";
    InputActions[InputActions["DropItem"] = 2] = "DropItem";
    InputActions[InputActions["SwapGunSlots"] = 3] = "SwapGunSlots";
    InputActions[InputActions["Interact"] = 4] = "Interact";
    InputActions[InputActions["Reload"] = 5] = "Reload";
    InputActions[InputActions["Cancel"] = 6] = "Cancel";
    InputActions[InputActions["UseItem"] = 7] = "UseItem";
    InputActions[InputActions["TopEmoteSlot"] = 8] = "TopEmoteSlot";
    InputActions[InputActions["RightEmoteSlot"] = 9] = "RightEmoteSlot";
    InputActions[InputActions["BottomEmoteSlot"] = 10] = "BottomEmoteSlot";
    InputActions[InputActions["LeftEmoteSlot"] = 11] = "LeftEmoteSlot";
})(InputActions || (InputActions = {}));
let SpectateActions;
(function(SpectateActions) {
    SpectateActions[SpectateActions["BeginSpectating"] = 0] = "BeginSpectating";
    SpectateActions[SpectateActions["SpectatePrevious"] = 1] = "SpectatePrevious";
    SpectateActions[SpectateActions["SpectateNext"] = 2] = "SpectateNext";
    SpectateActions[SpectateActions["SpectateSpecific"] = 3] = "SpectateSpecific";
    SpectateActions[SpectateActions["SpectateKillLeader"] = 4] = "SpectateKillLeader";
    SpectateActions[SpectateActions["Report"] = 5] = "Report";
})(SpectateActions || (SpectateActions = {}));
let PlayerActions;
(function(PlayerActions) {
    PlayerActions[PlayerActions["None"] = 0] = "None";
    PlayerActions[PlayerActions["Reload"] = 1] = "Reload";
    PlayerActions[PlayerActions["UseItem"] = 2] = "UseItem";
})(PlayerActions || (PlayerActions = {}));
let KillType;
(function(KillType) {
    KillType[KillType["Suicide"] = 0] = "Suicide";
    KillType[KillType["TwoPartyInteraction"] = 1] = "TwoPartyInteraction";
    KillType[KillType["Gas"] = 2] = "Gas";
    KillType[KillType["Airdrop"] = 3] = "Airdrop";
})(KillType || (KillType = {}));
const DEFAULT_INVENTORY = {};
for (const item of [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$healingItems$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["HealingItems"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$ammos$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Ammos"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$scopes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Scopes"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$definitions$2f$throwables$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Throwables"]
]){
    let amount = 0;
    switch(true){
        case item.itemType === __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Ammo && item.ephemeral:
            amount = Infinity;
            break;
        case item.itemType === __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Scope && item.giveByDefault:
            amount = 1;
            break;
    }
    DEFAULT_INVENTORY[item.idString] = amount;
}
Object.freeze(DEFAULT_INVENTORY);
const tickrate = 40;
const inventorySlotTypings = Object.freeze([
    __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Gun,
    __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Gun,
    __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Melee,
    __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ItemType"].Throwable
]);
const GameConstants = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["freezeDeep"]({
    // !!!!! NOTE: Increase this every time a bit stream change is made between latest release and master
    // or a new item is added to a definition list
    protocolVersion: 12,
    gridSize: 32,
    tickrate,
    // this is fine cause the object is frozen anyways, so
    // these two attributes can't ever be desynced
    msPerTick: 1000 / tickrate,
    maxPosition: 1632,
    player: {
        radius: 2.25,
        nameMaxLength: 16,
        defaultName: "Player",
        defaultHealth: 100,
        maxAdrenaline: 100,
        inventorySlotTypings,
        maxWeapons: inventorySlotTypings.length,
        killLeaderMinKills: 3,
        maxMouseDist: 128
    },
    airdrop: {
        fallTime: 8000,
        flyTime: 30000,
        damage: 300
    }
});
let ZIndexes;
(function(ZIndexes) {
    ZIndexes[ZIndexes["Ground"] = 0] = "Ground";
    ZIndexes[ZIndexes["UnderWaterDeathMarkers"] = 1] = "UnderWaterDeathMarkers";
    ZIndexes[ZIndexes["UnderWaterDeadObstacles"] = 2] = "UnderWaterDeadObstacles";
    ZIndexes[ZIndexes["UnderWaterObstacles"] = 3] = "UnderWaterObstacles";
    ZIndexes[ZIndexes["UnderWaterLoot"] = 4] = "UnderWaterLoot";
    ZIndexes[ZIndexes["UnderwaterPlayers"] = 5] = "UnderwaterPlayers";
    ZIndexes[ZIndexes["BuildingsFloor"] = 6] = "BuildingsFloor";
    ZIndexes[ZIndexes["Decals"] = 7] = "Decals";
    ZIndexes[ZIndexes["DeadObstacles"] = 8] = "DeadObstacles";
    ZIndexes[ZIndexes["DeathMarkers"] = 9] = "DeathMarkers";
    /**
     * This is the default layer for obstacles
     */ ZIndexes[ZIndexes["ObstaclesLayer1"] = 10] = "ObstaclesLayer1";
    ZIndexes[ZIndexes["Loot"] = 11] = "Loot";
    ZIndexes[ZIndexes["ObstaclesLayer2"] = 12] = "ObstaclesLayer2";
    ZIndexes[ZIndexes["Bullets"] = 13] = "Bullets";
    ZIndexes[ZIndexes["Players"] = 14] = "Players";
    /**
     * bushes, tables etc
     */ ZIndexes[ZIndexes["ObstaclesLayer3"] = 15] = "ObstaclesLayer3";
    /**
     * trees
     */ ZIndexes[ZIndexes["ObstaclesLayer4"] = 16] = "ObstaclesLayer4";
    ZIndexes[ZIndexes["BuildingsCeiling"] = 17] = "BuildingsCeiling";
    /**
     * obstacles that should show on top of ceilings
     */ ZIndexes[ZIndexes["ObstaclesLayer5"] = 18] = "ObstaclesLayer5";
    ZIndexes[ZIndexes["Emotes"] = 19] = "Emotes";
    ZIndexes[ZIndexes["Gas"] = 20] = "Gas";
})(ZIndexes || (ZIndexes = {}));

})()),
"[project]/vendor/suroi/common/src/utils/hitbox.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BaseHitbox": ()=>BaseHitbox,
    "CircleHitbox": ()=>CircleHitbox,
    "HitboxGroup": ()=>HitboxGroup,
    "HitboxType": ()=>HitboxType,
    "PolygonHitbox": ()=>PolygonHitbox,
    "RectangleHitbox": ()=>RectangleHitbox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/math.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/random.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/vector.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
let HitboxType;
(function(HitboxType) {
    HitboxType[HitboxType["Circle"] = 0] = "Circle";
    HitboxType[HitboxType["Rect"] = 1] = "Rect";
    HitboxType[HitboxType["Group"] = 2] = "Group";
    HitboxType[HitboxType["Polygon"] = 3] = "Polygon";
})(HitboxType || (HitboxType = {}));
class BaseHitbox {
    static fromJSON(data) {
        switch(data.type){
            case 0:
                return new CircleHitbox(data.radius, data.position);
            case 1:
                return new RectangleHitbox(data.min, data.max);
            case 2:
                return new HitboxGroup(...data.hitboxes.map((d)=>BaseHitbox.fromJSON(d)));
            case 3:
                return new PolygonHitbox(data.points);
        }
    }
    throwUnknownSubclassError(that) {
        throw new Error(`Hitbox type ${HitboxType[this.type]} doesn't support this operation with hitbox type ${HitboxType[that.type]}`);
    }
}
class CircleHitbox extends BaseHitbox {
    type = 0;
    position;
    radius;
    constructor(radius, position){
        super();
        this.position = position ?? __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0);
        this.radius = radius;
    }
    toJSON() {
        return {
            type: this.type,
            radius: this.radius,
            position: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.position)
        };
    }
    collidesWith(that) {
        switch(that.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].circleCollision(that.position, that.radius, this.position, this.radius);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectangleCollision(that.min, that.max, this.position, this.radius);
            case 2:
                return that.collidesWith(this);
            case 3:
                // todo: proper circle to polygon detection
                return that.collidesWith(this.toRectangle());
        }
    }
    resolveCollision(that) {
        switch(that.type){
            case 0:
                {
                    const collision = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].circleCircleIntersection(this.position, this.radius, that.position, that.radius);
                    if (collision) {
                        this.position = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(this.position, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(collision.dir, collision.pen));
                    }
                    break;
                }
            case 1:
                {
                    const collision = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectCircleIntersection(that.min, that.max, this.position, this.radius);
                    if (collision) {
                        this.position = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(this.position, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(collision.dir, collision.pen));
                    }
                    break;
                }
            case 2:
                {
                    for (const hitbox of that.hitboxes){
                        if (this.collidesWith(hitbox)) {
                            this.resolveCollision(hitbox);
                        }
                    }
                    break;
                }
            default:
                {
                    this.throwUnknownSubclassError(that);
                }
        }
    }
    distanceTo(that) {
        switch(that.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenCircles(that.position, that.radius, this.position, this.radius);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangleCircle(that.min, that.max, this.position, this.radius);
            default:
                this.throwUnknownSubclassError(that);
        }
    }
    clone() {
        return new CircleHitbox(this.radius, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.position));
    }
    transform(position, scale = 1, orientation = 0) {
        return new CircleHitbox(this.radius * scale, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(position, this.position, orientation));
    }
    scale(scale) {
        this.radius *= scale;
    }
    intersectsLine(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].lineIntersectsCircle(a, b, this.position, this.radius);
    }
    randomPoint() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomPointInsideCircle"](this.position, this.radius);
    }
    toRectangle() {
        return new RectangleHitbox(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(this.position.x - this.radius, this.position.y - this.radius), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(this.position.x + this.radius, this.position.y + this.radius));
    }
    isPointInside(point) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Geometry"].distance(point, this.position) < this.radius;
    }
    getCenter() {
        return this.position;
    }
}
class RectangleHitbox extends BaseHitbox {
    type = 1;
    min;
    max;
    constructor(min, max){
        super();
        this.min = min;
        this.max = max;
    }
    toJSON() {
        return {
            type: this.type,
            min: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.min),
            max: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.max)
        };
    }
    static fromLine(a, b) {
        return new RectangleHitbox(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Math.min(a.x, b.x), Math.min(a.y, b.y)), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Math.max(a.x, b.x), Math.max(a.y, b.y)));
    }
    static fromRect(width, height, pos = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0)) {
        const size = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(width / 2, height / 2);
        return new RectangleHitbox(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(pos, size), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(pos, size));
    }
    collidesWith(that) {
        switch(that.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectangleCollision(this.min, this.max, that.position, that.radius);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectRectCollision(that.min, that.max, this.min, this.max);
            case 2:
            case 3:
                return that.collidesWith(this);
        }
    }
    resolveCollision(that) {
        switch(that.type){
            case 0:
                {
                    const collision = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectCircleIntersection(this.min, this.max, that.position, that.radius);
                    if (collision) {
                        const rect = this.transform(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(collision.dir, collision.pen));
                        this.min = rect.min;
                        this.max = rect.max;
                    }
                    break;
                }
            case 1:
                {
                    const collision = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].rectRectIntersection(this.min, this.max, that.min, that.max);
                    if (collision) {
                        const rect = this.transform(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(collision.dir, collision.pen));
                        this.min = rect.min;
                        this.max = rect.max;
                    }
                    break;
                }
            case 2:
                {
                    for (const hitbox of that.hitboxes){
                        if (this.collidesWith(hitbox)) this.resolveCollision(hitbox);
                    }
                    break;
                }
            default:
                this.throwUnknownSubclassError(that);
        }
    }
    distanceTo(that) {
        switch(that.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangleCircle(this.min, this.max, that.position, that.radius);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangles(that.min, that.max, this.min, this.max);
        }
        this.throwUnknownSubclassError(that);
    }
    clone() {
        return new RectangleHitbox(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.min), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(this.max));
    }
    transform(position, scale = 1, orientation = 0) {
        const rect = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Geometry"].transformRectangle(position, this.min, this.max, scale, orientation);
        return new RectangleHitbox(rect.min, rect.max);
    }
    scale(scale) {
        const centerX = (this.min.x + this.max.x) / 2;
        const centerY = (this.min.y + this.max.y) / 2;
        this.min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create((this.min.x - centerX) * scale + centerX, (this.min.y - centerY) * scale + centerY);
        this.max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create((this.max.x - centerX) * scale + centerX, (this.max.y - centerY) * scale + centerY);
    }
    intersectsLine(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].lineIntersectsRect(a, b, this.min, this.max);
    }
    randomPoint() {
        return {
            x: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomFloat"](this.min.x, this.max.x),
            y: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomFloat"](this.min.y, this.max.y)
        };
    }
    toRectangle() {
        return this;
    }
    isPointInside(point) {
        return point.x > this.min.x && point.y > this.min.y && point.x < this.max.x && point.y < this.max.y;
    }
    getCenter() {
        return {
            x: this.min.x + (this.max.x - this.min.x) / 2,
            y: this.min.y + (this.max.y - this.min.y) / 2
        };
    }
}
class HitboxGroup extends BaseHitbox {
    type = 2;
    position = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0);
    hitboxes;
    constructor(...hitboxes){
        super();
        this.hitboxes = hitboxes;
    }
    toJSON() {
        return {
            type: 2,
            hitboxes: this.hitboxes.map((hitbox)=>hitbox.toJSON())
        };
    }
    collidesWith(that) {
        return this.hitboxes.some((hitbox)=>hitbox.collidesWith(that));
    }
    resolveCollision(that) {
        that.resolveCollision(this);
    }
    distanceTo(that) {
        let distance = Number.MAX_VALUE;
        let record;
        for (const hitbox of this.hitboxes){
            let newRecord;
            switch(hitbox.type){
                case 0:
                    switch(that.type){
                        case 0:
                            newRecord = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenCircles(that.position, that.radius, hitbox.position, hitbox.radius);
                            break;
                        case 1:
                            newRecord = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangleCircle(that.min, that.max, hitbox.position, hitbox.radius);
                            break;
                    }
                    break;
                case 1:
                    {
                        switch(that.type){
                            case 0:
                                newRecord = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangleCircle(hitbox.min, hitbox.max, that.position, that.radius);
                                break;
                            case 1:
                                newRecord = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].distanceBetweenRectangles(that.min, that.max, hitbox.min, hitbox.max);
                        }
                    }
            }
            if (newRecord.distance < distance) {
                record = newRecord;
                distance = newRecord.distance;
            }
        }
        return record;
    }
    clone() {
        return new HitboxGroup(...this.hitboxes.map((hitbox)=>hitbox.clone()));
    }
    transform(position, scale, orientation) {
        this.position = position;
        return new HitboxGroup(...this.hitboxes.map((hitbox)=>hitbox.transform(position, scale, orientation)));
    }
    scale(scale) {
        for (const hitbox of this.hitboxes)hitbox.scale(scale);
    }
    intersectsLine(a, b) {
        const intersections = [];
        // get the closest intersection point from the start of the line
        for (const hitbox of this.hitboxes){
            const intersection = hitbox.intersectsLine(a, b);
            if (intersection) intersections.push(intersection);
        }
        return intersections.sort((c, d)=>__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Geometry"].distanceSquared(c.point, a) - __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Geometry"].distanceSquared(d.point, a))[0] ?? null;
    }
    randomPoint() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pickRandomInArray"](this.hitboxes).randomPoint();
    }
    toRectangle() {
        const min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Number.MAX_VALUE, Number.MAX_VALUE);
        const max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0);
        for (const hitbox of this.hitboxes){
            const toRect = hitbox.toRectangle();
            min.x = Math.min(min.x, toRect.min.x);
            min.y = Math.min(min.y, toRect.min.y);
            max.x = Math.max(max.x, toRect.max.x);
            max.y = Math.max(max.y, toRect.max.y);
        }
        return new RectangleHitbox(min, max);
    }
    isPointInside(point) {
        for (const hitbox of this.hitboxes){
            if (hitbox.isPointInside(point)) return true;
        }
        return false;
    }
    getCenter() {
        return this.toRectangle().getCenter();
    }
}
class PolygonHitbox extends BaseHitbox {
    type = 3;
    points;
    constructor(points){
        super();
        this.points = points;
    }
    toJSON() {
        return {
            type: this.type,
            points: this.points.map((point)=>__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].clone(point))
        };
    }
    collidesWith(that) {
        switch(that.type){
            case 1:
                {
                    if (this.isPointInside(that.min) || this.isPointInside(that.max)) return true;
                    const length = this.points.length;
                    for(let i = 0; i < length; i++){
                        const a = this.points[i];
                        if (that.isPointInside(a)) return true;
                        const b = this.points[(i + 1) % length];
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].lineIntersectsRectTest(b, a, that.min, that.max)) {
                            return true;
                        }
                    }
                    return false;
                }
        }
        this.throwUnknownSubclassError(that);
    }
    resolveCollision(that) {
        this.throwUnknownSubclassError(that);
    }
    distanceTo(that) {
        this.throwUnknownSubclassError(that);
    }
    clone() {
        return new PolygonHitbox(this.points);
    }
    transform(position, scale = 1, orientation = 0) {
        return new PolygonHitbox(this.points.map((point)=>__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(position, point, orientation), scale)));
    }
    scale(scale) {
        for(let i = 0, length = this.points.length; i < length; i++){
            this.points[i] = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(this.points[i], scale);
        }
    }
    intersectsLine(_a, _b) {
        throw new Error("Operation not supported");
    }
    randomPoint() {
        const rect = this.toRectangle();
        let point;
        do {
            point = rect.randomPoint();
        }while (!this.isPointInside(point))
        return point;
    }
    toRectangle() {
        const min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Number.MAX_VALUE, Number.MAX_VALUE);
        const max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0);
        for (const point of this.points){
            min.x = Math.min(min.x, point.x);
            min.y = Math.min(min.y, point.y);
            max.x = Math.max(max.x, point.x);
            max.y = Math.max(max.y, point.y);
        }
        return new RectangleHitbox(min, max);
    }
    isPointInside(point) {
        const { x, y } = point;
        let inside = false;
        const count = this.points.length;
        // take first and last
        // then take second and second last
        // so on
        for(let i = 0, j = count - 1; i < count; j = i++){
            const { x: xi, y: yi } = this.points[i];
            const { x: xj, y: yj } = this.points[j];
            if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
                inside = !inside;
            }
        }
        return inside;
    }
    getCenter() {
        return this.toRectangle().getCenter();
    }
}

})()),
"[project]/vendor/suroi/common/src/utils/math.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Angle": ()=>Angle,
    "Collision": ()=>Collision,
    "Geometry": ()=>Geometry,
    "Numeric": ()=>Numeric,
    "calculateDoorHitboxes": ()=>calculateDoorHitboxes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$hitbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/hitbox.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/objectDefinitions.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/vector.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Angle = Object.freeze({
    /**
     * Draws a line between two points and returns that line's angle
     * @param a The first point, used as the head of the vector
     * @param b The second point, used as the tail of the vector
     * @returns The angle, in radians, of the line going from b to a
     */ betweenPoints (a, b) {
        return Math.atan2(a.y - b.y, a.x - b.x);
    },
    /**
     * Normalize an angle to a value between -π and π
     * @param radians The angle, in radians
     */ normalize (radians) {
        const π = Math.PI;
        return Numeric.absMod(radians - π, 2 * π) - π;
    },
    /**
     * Find the smallest difference between two angles
     * (the difference between 10º and 350º can be either -340º or 20º—chances are, you're looking for the latter)
     * @param start The initial angle, in radians
     * @param end The final angle, in radians
     */ minimize (start, end) {
        const π = Math.PI;
        return Numeric.absMod(end - start + π, 2 * π) - π;
    },
    /**
     * Converts degrees to radians
     * @param degrees An angle in degrees
     * @return The angle in radians
     */ degreesToRadians (degrees) {
        return degrees * (Math.PI / 180);
    },
    /**
     * Converts radians to degrees
     * @param radians An angle in radians
     * @return The angle in degrees
     */ radiansToDegrees (radians) {
        return radians / Math.PI * 180;
    },
    orientationToRotation (orientation) {
        return -this.normalize(orientation * (Math.PI / 2));
    }
});
const Numeric = Object.freeze({
    /**
     * Works like regular modulo, but negative numbers cycle back around: hence,
     * `-1 % 4` gives `3` and not `-1`
     * @param a The dividend
     * @param n The divisor
     */ absMod (a, n) {
        return a >= 0 ? a % n : (a % n + n) % n;
    },
    /**
     * Interpolate between two values
     * @param start The start value
     * @param end The end value
     * @param interpFactor The interpolation factor
     * @returns A number corresponding to the linear interpolation between `a` and `b` at factor `interpFactor`
     */ lerp (start, end, interpFactor) {
        return start * (1 - interpFactor) + end * interpFactor;
    },
    /**
     * Conform a number to specified bounds
     * @param value The number to conform
     * @param min The minimum value the number can be
     * @param max The maximum value the number can be
     */ clamp (value, min, max) {
        return value < max ? value > min ? value : min : max;
    },
    /**
     * Snaps a value to either bounds, unless it's precisely halfway between them
     * @param value The value to snap
     * @param min The smallest snap value
     * @param max The largest snap value
     * @returns Either the `min`, `max` or the original value if it happens to be
     * exactly halfway between `min` and `max`
     */ clampToBound (value, min, max) {
        const mid = (min + max) / 2;
        switch(true){
            case value >= max:
            case value > mid:
                return max;
            case value <= min:
            case value < mid:
                return min;
            default:
                return value;
        }
    },
    /**
     * Add two orientations
     * @param n1 The first orientation
     * @param n2 The second orientation
     * @return The sum of the two `Orientation`s
     */ addOrientations (n1, n2) {
        return (n1 + n2) % 4;
    }
});
const Geometry = Object.freeze({
    /**
     * Get the distance between two points
     * @param a The first point
     * @param b The second point
     */ distance (a, b) {
        return Math.sqrt(this.distanceSquared(a, b));
    },
    /**
     * Get the distance between two points squared
     * @param a The first point
     * @param b The second point
     */ distanceSquared (a, b) {
        return (b.x - a.x) ** 2 + (b.y - a.y) ** 2;
    },
    /**
     * Returns the area of a triangle whose vertices are the three vectors passed in
     * @param a The first vertex
     * @param b The second vertex
     * @param c The third vertex
     * @returns The area of the triangle formed by the three provided vectors
     */ signedAreaTri (a, b, c) {
        return (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
    },
    /**
     * Transform a rectangle by a given position and orientation
     * @param pos The position to transform the rectangle by
     * @param min The rectangle min `Vector`
     * @param max The rectangle max `Vector`
     * @param scale The rectangle's scale
     * @param orientation The orientation to rotate it
     * @return A new Rectangle transformed by the given position and orientation
     */ transformRectangle (pos, min, max, scale, orientation) {
        min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(min, scale);
        max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(max, scale);
        if (orientation !== 0) {
            const minX = min.x;
            const minY = min.y;
            const maxX = max.x;
            const maxY = max.y;
            switch(orientation){
                case 1:
                    min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(maxX, minY);
                    max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(minX, maxY);
                    break;
                case 2:
                    min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(maxX, maxY);
                    max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(minX, minY);
                    break;
                case 3:
                    min = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(minX, maxY);
                    max = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(maxX, minY);
                    break;
            }
        }
        return {
            min: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(pos, min, orientation),
            max: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(pos, max, orientation)
        };
    }
});
const Collision = Object.freeze({
    /**
     * Check if two circles colliding
     * @param centerA The center of the first circle
     * @param radiusA The radius of the first circle
     * @param centerB The center of the second circle
     * @param radiusB The radius of the second circle
     */ circleCollision (centerA, radiusA, centerB, radiusB) {
        const a = radiusA + radiusB;
        const x = centerA.x - centerB.x;
        const y = centerA.y - centerB.y;
        return a * a > x * x + y * y;
    },
    /**
     * Check if a circle and a rectangle are colliding
     * @param min The min Vector of the rectangle
     * @param max The max vector of the rectangle
     * @param pos The center of the circle
     * @param rad The radius of the circle
     */ rectangleCollision (min, max, pos, rad) {
        const cpt = {
            x: Numeric.clamp(pos.x, min.x, max.x),
            y: Numeric.clamp(pos.y, min.y, max.y)
        };
        const distX = pos.x - cpt.x;
        const distY = pos.y - cpt.y;
        const distSquared = distX * distX + distY * distY;
        return distSquared < rad * rad || pos.x >= min.x && pos.x <= max.x && pos.y >= min.y && pos.y <= max.y;
    },
    /**
     * Check if two rectangles collide
     * @param min1 The min `Vector` of the first rectangle
     * @param max1 The max `Vector` of the first rectangle
     * @param min2 The min `Vector` of the second rectangle
     * @param max2 The max `Vector` of the second rectangle
     * @returns `true` if the two rectangles collide, `false` if not
     */ rectRectCollision (min1, max1, min2, max2) {
        return min2.x < max1.x && min2.y < max1.y && min1.x < max2.x && min1.y < max2.y;
    },
    /**
     * Determines the distance between two circles
     * @param centerA The center of the first circle
     * @param radiusA The radius of the first circle
     * @param centerB The center of the second circle
     * @param radiusB The radius of the second circle
     * @returns An object containing a boolean indicating whether the two circles are colliding and a number indicating the distance between them
     */ distanceBetweenCircles (centerA, radiusA, centerB, radiusB) {
        const a = radiusA + radiusB;
        const x = centerA.x - centerB.x;
        const y = centerA.y - centerB.y;
        const a2 = a * a;
        const xy = x * x + y * y;
        return {
            collided: a2 > xy,
            distance: a2 - xy
        };
    },
    /**
     * Determines the distance between a circle and a rectangle
     * @param min The min `Vector` of the rectangle
     * @param max The max `Vector` of the rectangle
     * @param circlePos The center of the circle
     * @param circleRad The radius of the circle
     * @returns An object containing a boolean indicating whether the two shapes are colliding and a number indicating the distance between them
     */ distanceBetweenRectangleCircle (min, max, circlePos, circleRad) {
        const distX = Math.max(min.x, Math.min(max.x, circlePos.x)) - circlePos.x;
        const distY = Math.max(min.y, Math.min(max.y, circlePos.y)) - circlePos.y;
        const radSquared = circleRad * circleRad;
        const distSquared = distX * distX + distY * distY;
        return {
            collided: distSquared < radSquared,
            distance: distSquared - radSquared
        };
    },
    /**
     * Determines the distance between two rectangles
     * @param min1 The min `Vector` of the first rectangle
     * @param max1 The max `Vector` of the first rectangle
     * @param min2 The min `Vector` of the second rectangle
     * @param max2 The max `Vector` of the second rectangle
     * @returns An object containing a boolean indicating whether the two rectangles are colliding and a number indicating the distance between them
     */ distanceBetweenRectangles (min1, max1, min2, max2) {
        const distX = Math.max(min1.x, Math.min(max1.x, min2.x, max2.x)) - Math.min(min1.x, Math.max(max1.x, min2.x, max2.x));
        const distY = Math.max(min1.y, Math.min(max1.y, min2.y, max2.y)) - Math.min(min1.y, Math.max(max1.y, min2.y, max2.y));
        // If distX or distY is negative, the rectangles are overlapping in that dimension, and the distance is 0
        if (distX < 0 || distY < 0) {
            return {
                collided: true,
                distance: 0
            };
        }
        // Calculate the squared distance between the rectangles
        const distSquared = distX * distX + distY * distY;
        return {
            collided: false,
            distance: distSquared
        };
    },
    /**
     * Determines where a line intersects another line
     * @param startA The start of the first line
     * @param endA The end of the first line
     * @param startB The start of the second line
     * @param endB The end of the second line
     * @return The intersection position and null if no such intersection exists
     */ lineIntersectsLine (startA, endA, startB, endB) {
        const x1 = Geometry.signedAreaTri(startA, endA, endB);
        const x2 = Geometry.signedAreaTri(startA, endA, startB);
        if (x1 !== 0.0 && x2 !== 0.0 && x1 * x2 < 0.0) {
            const x3 = Geometry.signedAreaTri(startB, endB, startA);
            const x4 = x3 + x2 - x1;
            if (x3 * x4 < 0.0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(startA, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(endA, startA), x3 / (x3 - x4)));
            }
        }
        return null;
    },
    /**
     * Determines where a line intersects a circle
     * @param s0 The start of the line
     * @param s1 The end of the line
     * @param pos The position of the circle
     * @param rad The radius of the circle
     * @return An intersection response with the intersection position and normal `Vector`s, or `null` if they don't intersect
     */ lineIntersectsCircle (s0, s1, pos, rad) {
        let d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(s1, s0);
        const len = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].length(d), 0.000001);
        d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(d);
        const m = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(s0, pos);
        const b = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(m, d);
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(m, m) - rad * rad;
        if (c > 0 && b > 0) return null;
        const discSq = b * b - c;
        if (discSq < 0) return null;
        const disc = Math.sqrt(discSq);
        const t = -b < disc ? disc - b : -b - disc;
        if (t <= len) {
            const point = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(s0, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(d, t));
            return {
                point,
                normal: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(point, pos))
            };
        }
        return null;
    },
    /**
     * Determines where a line intersects a rectangle
     * @param s0 The start of the line
     * @param s1 The end of the line
     * @param min The min Vector of the rectangle
     * @param max The max Vector of the rectangle
     * @return An intersection response with the intersection position and normal `Vector`s, or `null` if they don't intersect
     */ lineIntersectsRect (s0, s1, min, max) {
        let tmin = 0;
        let tmax = Number.MAX_VALUE;
        const eps = 1e-5;
        const r = s0;
        let d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(s1, s0);
        const dist = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].length(d);
        d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(d);
        let absDx = Math.abs(d.x);
        let absDy = Math.abs(d.y);
        if (absDx < eps) {
            d.x = eps * 2.0;
            absDx = d.x;
        }
        if (absDy < eps) {
            d.y = eps * 2.0;
            absDy = d.y;
        }
        if (absDx > eps) {
            const tx1 = (min.x - r.x) / d.x;
            const tx2 = (max.x - r.x) / d.x;
            tmin = Math.max(tmin, Math.min(tx1, tx2));
            tmax = Math.min(tmax, Math.max(tx1, tx2));
            if (tmin > tmax) return null;
        }
        if (absDy > eps) {
            const ty1 = (min.y - r.y) / d.y;
            const ty2 = (max.y - r.y) / d.y;
            tmin = Math.max(tmin, Math.min(ty1, ty2));
            tmax = Math.min(tmax, Math.max(ty1, ty2));
            if (tmin > tmax) return null;
        }
        if (tmin > dist) return null;
        // Hit
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(s0, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(d, tmin));
        // Intersection normal
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(min, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(max, min), 0.5));
        const p0 = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(p, c);
        const d0 = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(min, max), 0.5);
        const x = p0.x / Math.abs(d0.x) * 1.001;
        const y = p0.y / Math.abs(d0.y) * 1.001;
        return {
            point: p,
            normal: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Math.trunc(x), Math.trunc(y)), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(1, 0))
        };
    },
    /**
     * Checks if a line intersects a rectangle
     * @param s0 The start of the line
     * @param s1 The end of the line
     * @param min The min Vector of the rectangle
     * @param max The max Vector of the rectangle
     * @return `true` if the line intersects, `false` otherwise
     */ lineIntersectsRectTest (s0, s1, min, max) {
        let tmin = 0;
        let tmax = Number.MAX_VALUE;
        const eps = 1e-5;
        let d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(s1, s0);
        const dist = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].length(d);
        d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(d);
        let absDx = Math.abs(d.x);
        let absDy = Math.abs(d.y);
        if (absDx < eps) {
            d.x = eps * 2.0;
            absDx = d.x;
        }
        if (absDy < eps) {
            d.y = eps * 2.0;
            absDy = d.y;
        }
        if (absDx > eps) {
            const tx1 = (min.x - s0.x) / d.x;
            const tx2 = (max.x - s0.x) / d.x;
            tmin = Math.max(tmin, Math.min(tx1, tx2));
            tmax = Math.min(tmax, Math.max(tx1, tx2));
            if (tmin > tmax) return false;
        }
        if (absDy > eps) {
            const ty1 = (min.y - s0.y) / d.y;
            const ty2 = (max.y - s0.y) / d.y;
            tmin = Math.max(tmin, Math.min(ty1, ty2));
            tmax = Math.min(tmax, Math.max(ty1, ty2));
            if (tmin > tmax) return false;
        }
        return tmin <= dist;
    },
    circleCircleIntersection (centerA, radiusA, centerB, radiusB) {
        const r = radiusA + radiusB;
        const toP1 = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(centerB, centerA);
        const distSqr = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].squaredLength(toP1);
        return distSqr < r * r ? {
            dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(toP1),
            pen: r - Math.sqrt(distSqr)
        } : null;
    },
    rectCircleIntersection (min, max, pos, radius) {
        if (min.x <= pos.x && pos.x <= max.x && min.y <= pos.y && pos.y <= max.y) {
            // circle center inside rectangle
            const halfDimension = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(max, min), 0.5);
            const p = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(pos, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(min, halfDimension));
            const xp = Math.abs(p.x) - halfDimension.x - radius;
            const yp = Math.abs(p.y) - halfDimension.y - radius;
            return xp > yp ? {
                dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(p.x > 0 ? 1 : -1, 0),
                pen: -xp
            } : {
                dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, p.y > 0 ? 1 : -1),
                pen: -yp
            };
        }
        const dir = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Numeric.clamp(pos.x, min.x, max.x), Numeric.clamp(pos.y, min.y, max.y)), pos);
        const dstSqr = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].squaredLength(dir);
        if (dstSqr < radius * radius) {
            const dst = Math.sqrt(dstSqr);
            return {
                dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].normalizeSafe(dir),
                pen: radius - dst
            };
        }
        return null;
    },
    distanceToLine (p, a, b) {
        const ab = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(b, a);
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].squaredLength(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(a, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(ab, Numeric.clamp(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(p, a), ab) / __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(ab, ab), 0, 1))), p));
    },
    /**
     * Source
     * @link http://ahamnett.blogspot.com/2012/06/raypolygon-intersections.html
     */ rayIntersectsLine (origin, direction, lineA, lineB) {
        const segment = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(lineB, lineA);
        const segmentPerp = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(segment.y, -segment.x);
        const perpDotDir = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(direction, segmentPerp);
        // If lines are parallel, no intersection
        if (Math.abs(perpDotDir) <= 1e-7) return null;
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(lineA, origin);
        const distanceAlongRay = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(segmentPerp, d) / perpDotDir;
        const distanceAlongLine = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].dotProduct(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(direction.y, -direction.x), d) / perpDotDir;
        // If t is positive and s lies within the line it intersects; returns t
        return distanceAlongRay >= 0 && distanceAlongLine >= 0 && distanceAlongLine <= 1 ? distanceAlongRay : null;
    },
    rayIntersectsPolygon (origin, direction, polygon) {
        let t = Number.MAX_VALUE;
        let intersected = false;
        for(let i = 0, length = polygon.length, j = length - 1; i < length; j = i++){
            const dist = Collision.rayIntersectsLine(origin, direction, polygon[j], polygon[i]);
            if (dist !== null && dist < t) {
                intersected = true;
                t = dist;
            }
        }
        // Returns closest intersection
        return intersected ? t : null;
    },
    rectRectIntersection (min0, max0, min1, max1) {
        const e0 = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(max0, min0), 0.5);
        const e1 = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].scale(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(max1, min1), 0.5);
        const n = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].sub(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(min1, e1), __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(min0, e0));
        const xo = e0.x + e1.x - Math.abs(n.x);
        const yo = e0.y + e1.y - Math.abs(n.y);
        return xo > 0.0 && yo > 0.0 ? xo > yo ? {
            dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(Math.sign(n.x), 0),
            pen: xo
        } : {
            dir: __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, Math.sign(n.y)),
            pen: yo
        } : null;
    }
});
function calculateDoorHitboxes(definition, position, rotation) {
    if (!(definition.hitbox instanceof __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$hitbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["RectangleHitbox"]) || definition.role !== __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$objectDefinitions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ObstacleSpecialRoles"].Door) {
        throw new Error("Unable to calculate hitboxes for door: Not a door or hitbox is non-rectangular");
    }
    switch(definition.operationStyle){
        case "slide":
            {
                const openHitbox = Geometry.transformRectangle(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(position, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create((definition.hitbox.min.x - definition.hitbox.max.x) * (definition.slideFactor ?? 1), 0), rotation), definition.hitbox.min, definition.hitbox.max, 1, rotation);
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                return {
                    openHitbox: new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$hitbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["RectangleHitbox"](openHitbox.min, openHitbox.max)
                };
            }
        case "swivel":
        default:
            {
                const openRectangle = Geometry.transformRectangle(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(position, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(definition.hingeOffset, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(-definition.hingeOffset.y, definition.hingeOffset.x)), rotation), definition.hitbox.min, definition.hitbox.max, 1, Numeric.absMod(rotation + 1, 4));
                const openAltRectangle = Geometry.transformRectangle(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].addAdjust(position, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(definition.hingeOffset, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(definition.hingeOffset.y, -definition.hingeOffset.x)), rotation), definition.hitbox.min, definition.hitbox.max, 1, Numeric.absMod(rotation - 1, 4));
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                return {
                    openHitbox: new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$hitbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["RectangleHitbox"](openRectangle.min, openRectangle.max),
                    openAltHitbox: new __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$hitbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["RectangleHitbox"](openAltRectangle.min, openAltRectangle.max)
                };
            }
    }
}

})()),
"[project]/vendor/suroi/common/src/utils/random.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SeededRandom": ()=>SeededRandom,
    "pickRandomInArray": ()=>pickRandomInArray,
    "random": ()=>random,
    "randomBoolean": ()=>randomBoolean,
    "randomFloat": ()=>randomFloat,
    "randomPointInsideCircle": ()=>randomPointInsideCircle,
    "randomRotation": ()=>randomRotation,
    "randomSign": ()=>randomSign,
    "randomVector": ()=>randomVector,
    "weightedRandom": ()=>weightedRandom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/math.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function random(min, max) {
    return Math.floor(randomFloat(min, max + 1));
}
function randomBoolean() {
    return Math.random() < 0.5;
}
function randomSign() {
    return randomBoolean() ? -1 : 1;
}
function randomVector(minX, maxX, minY, maxY) {
    return {
        x: randomFloat(minX, maxX),
        y: randomFloat(minY, maxY)
    };
}
function randomRotation() {
    return randomFloat(-Math.PI, Math.PI);
}
function randomPointInsideCircle(position, radius) {
    const angle = randomFloat(0, Math.PI * 2);
    const length = randomFloat(0, radius);
    return {
        x: position.x + Math.cos(angle) * length,
        y: position.y + Math.sin(angle) * length
    };
}
function weightedRandom(items, weights) {
    let i;
    for(i = 1; i < weights.length; i++)weights[i] += weights[i - 1];
    const random = Math.random() * weights[weights.length - 1];
    for(i = 0; i < weights.length; i++){
        if (weights[i] > random) break;
    }
    return items[i];
}
function pickRandomInArray(items) {
    return items[Math.floor(Math.random() * items.length)];
}
class SeededRandom {
    rng = 0;
    constructor(seed){
        this.rng = seed;
    }
    get(min = 0, max = 1) {
        this.rng = this.rng * 16807 % 2147483647;
        return __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Numeric"].lerp(min, max, this.rng / 2147483647);
    }
    getInt(min, max) {
        return Math.round(this.get(min, max));
    }
}

})()),
"[project]/lib/util/calculators.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PLAYERRADIUS": ()=>PLAYERRADIUS,
    "shootGun": ()=>shootGun
});
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/math.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/random.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/utils/vector.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const PLAYERRADIUS = 2.25;
function shootGun(gun, trials, range) {
    let damage = 0;
    for(let trial = 0; trial < trials; trial++){
        const spread = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Angle"].degreesToRadians(gun.moveSpread / 2);
        const jitter = gun.jitterRadius ?? 0;
        const limit = gun.bulletCount ?? 1;
        for(let i = 0; i < limit; i++){
            const rayStart = gun.jitterRadius ? __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomPointInsideCircle"](__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0), jitter) : __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(0, 0);
            const ray = __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].add(__TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].fromPolar(gun.consistentPatterning === true ? 2 * (i / limit - 0.5) : __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$random$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomFloat"](-1, 1) * spread, gun.ballistics.range), rayStart);
            damage += __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$math$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Collision"].lineIntersectsCircle(rayStart, ray, __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$utils$2f$vector$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Vec"].create(range, 0), PLAYERRADIUS) ? gun.ballistics.damage : 0;
        }
    }
    return damage / trials;
}

})()),
"[project]/components/interactive/GunGraph.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>GunGraph
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2f$calculators$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/util/calculators.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/chart.js@4.4.1/node_modules/chart.js/dist/chart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chartjs$2d$2$40$5$2e$2$2e$0_chart$2e$js$40$4$2e$4$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-chartjs-2@5.2.0_chart.js@4.4.1_react@18.2.0/node_modules/react-chartjs-2/dist/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/vendor/suroi/common/src/constants.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
function GunGraph({ gun }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScatterController"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chart$2e$js$40$4$2e$4$2e$1$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Title"]);
    const graphCanvas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    function calculate(gun) {
        let data = [];
        for(let range = -10; range < gun.ballistics.range + 10; range += gun.ballistics.range / 750){
            data.push({
                x: range,
                y: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$util$2f$calculators$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["shootGun"](gun, 500 / (gun.bulletCount ?? 1), range)
            });
        }
        return data;
    }
    const damages = calculate(gun);
    const dps = damages.map((damage)=>({
            x: damage.x,
            y: gun.fireMode === __TURBOPACK__imported__module__$5b$project$5d2f$vendor$2f$suroi$2f$common$2f$src$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FireMode"].Burst ? damage.y * (1000 / (gun.burstProperties.burstCooldown + gun.fireDelay * gun.burstProperties.shotsPerBurst)) : damage.y * (1000 / gun.fireDelay)
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "prose prose-invert",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "This test assumes that the target isn",
                    "'",
                    "t moving and the gun is aiming dead center on the target."
                ]
            }, void 0, true, {
                fileName: "<[project]/components/interactive/GunGraph.tsx>",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "<[project]/components/interactive/GunGraph.tsx>",
                    lineNumber: 64,
                    columnNumber: 27
                }, void 0),
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chartjs$2d$2$40$5$2e$2$2e$0_chart$2e$js$40$4$2e$4$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: {
                            datasets: [
                                {
                                    label: `Simulated Damage of ${gun.name}`,
                                    data: damages,
                                    backgroundColor: "hsl(209, 60%, 51%)"
                                },
                                {
                                    label: `Simulated DPS of ${gun.name}`,
                                    data: dps,
                                    backgroundColor: "hsl(27, 100%, 50%)"
                                }
                            ]
                        },
                        options: {
                            aspectRatio: 1.3,
                            scales: {
                                x: {
                                    grid: {
                                        color: [
                                            "#444",
                                            "#888"
                                        ]
                                    },
                                    ticks: {
                                        color: "white",
                                        stepSize: 10
                                    },
                                    title: {
                                        text: "Distance between target center and muzzle in game units",
                                        display: true,
                                        color: "white"
                                    }
                                },
                                y: {
                                    grid: {
                                        color: [
                                            "#444",
                                            "#888"
                                        ]
                                    },
                                    ticks: {
                                        color: "white"
                                    },
                                    title: {
                                        text: "Damage value",
                                        display: true,
                                        color: "white"
                                    }
                                }
                            },
                            plugins: {
                                title: {
                                    text: `Simulated damages of ${gun.name}`,
                                    display: true,
                                    color: "white"
                                },
                                legend: {
                                    labels: {
                                        color: "white"
                                    }
                                },
                                tooltip: {
                                    filter: (item, i)=>{
                                        return i === 0;
                                    }
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/components/interactive/GunGraph.tsx>",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: "CSV for damage"
                    }, void 0, false, {
                        fileName: "<[project]/components/interactive/GunGraph.tsx>",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto",
                        children: [
                            "Distance between target center and muzzle in game units, Damage",
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            damages.map((damage, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    children: [
                                        damage.x.toFixed(2),
                                        ", ",
                                        damage.y.toFixed(2),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                            fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/interactive/GunGraph.tsx>",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: "CSV for DPS"
                    }, void 0, false, {
                        fileName: "<[project]/components/interactive/GunGraph.tsx>",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto",
                        children: [
                            "Distance between target center and muzzle in game units, DPS",
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            dps.map((damage, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    children: [
                                        damage.x.toFixed(2),
                                        ", ",
                                        damage.y.toFixed(2),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                            fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "<[project]/components/interactive/GunGraph.tsx>",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/interactive/GunGraph.tsx>",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/interactive/GunGraph.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/interactive/GunGraph.tsx>",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}

})()),
"[project]/components/interactive/GunGraphButton.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>GunGraphButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2f$GunGraph$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/interactive/GunGraph.tsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function GunGraphButton({ gun }) {
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: open && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    children: "Gun Graph"
                }, void 0, false, {
                    fileName: "<[project]/components/interactive/GunGraphButton.tsx>",
                    lineNumber: 13,
                    columnNumber: 11
                }, this),
                " ",
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2f$GunGraph$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    gun: gun
                }, void 0, false, {
                    fileName: "<[project]/components/interactive/GunGraphButton.tsx>",
                    lineNumber: 13,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
            className: "transition-color bg-muted p-4 not-prose rounded-md ring-border ring hover:ring-primary",
            onClick: ()=>setOpen(true),
            children: "Open Gun Graph (May be laggy, especially on mobile)"
        }, void 0, false, {
            fileName: "<[project]/components/interactive/GunGraphButton.tsx>",
            lineNumber: 16,
            columnNumber: 9
        }, this)
    }, void 0, false);
}

})()),

};

//# sourceMappingURL=_3dac10._.js.map