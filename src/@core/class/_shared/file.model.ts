export class FileModel{
    id: number;
    originalName: string;
    storeName: string;
    mimeType: string;
    sizeInBytes: number;
    url: string;

    getFileSizeInKB(){
        return this.sizeInBytes / 1000;
    }
}  
export class FileListModel{
    id: number;
    originalName: string = '';
    storeName: string = '';
    mimeType: string = '';
    sizeInBytes: number;
    url: string = '';
    nameType: string = '';
    getFileSizeInKB(){
        return this.sizeInBytes / 1000;
    }
}   
