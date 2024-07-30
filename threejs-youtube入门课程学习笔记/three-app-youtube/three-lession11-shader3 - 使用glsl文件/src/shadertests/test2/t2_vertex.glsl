varying vec3 pos;
uniform float u_time;

void main() {
    vec4 result;
    pos = position;

    result = vec4(position.x, sin(position.z), position.z, 1.0);
    result = vec4(position.x, sin(position.z + u_time), position.z, 1.0);

    //位置=投影矩阵*视图模型矩阵*result
    gl_Position = projectionMatrix * modelViewMatrix * result;
}