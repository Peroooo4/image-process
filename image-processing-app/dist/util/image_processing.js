"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const inputPath = path_1.default.resolve('assets', `${imageName}.jpg`); // Assuming images are in 'assets'
    const outputPath = path_1.default.resolve('assets/thumb', `<span class="math-inline">\{imageName\}\_</span>{width}_${height}.jpg`);
    try {
        yield (0, sharp_1.default)(inputPath)
            .resize(width, height)
            .toFile(outputPath);
        return outputPath;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.default = resizeImage;
//# sourceMappingURL=image_processing.js.map