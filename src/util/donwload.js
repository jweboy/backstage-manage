export default function download(name, blob) {
    const aTag = document.createElement('a');
    
    aTag.download = name;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}