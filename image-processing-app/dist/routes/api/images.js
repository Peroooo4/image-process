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
const express_1 = __importDefault(require("express"));
const image_processing_1 = __importDefault(require("../../util/image_processing"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageName = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!imageName || !width || !height) {
        res.status(400).send('Missing parameters: filename, width, or height');
        return;
    }
    const resizedImagePath = path_1.default.resolve('assets/thumb', `${imageName}_${width}_${height}.jpg`);
    if (fs_1.default.existsSync(resizedImagePath)) {
        return res.sendFile(resizedImagePath);
    }
    const newImagePath = yield (0, image_processing_1.default)(imageName, width, height);
    if (newImagePath) {
        return res.sendFile(newImagePath);
    }
    else {
        res.status(500).send('Image resizing failed');
        return;
    }
}));
exports.default = images;
//# sourceMappingURL=images.js.map