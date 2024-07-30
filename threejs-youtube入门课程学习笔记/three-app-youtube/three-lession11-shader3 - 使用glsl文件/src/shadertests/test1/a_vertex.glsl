varying vec3 pos;
uniform float u_time;

void main() {
    vec4 result;
    pos = position;

    result = vec4(position.x, 4.0 * sin(position.z / 4.0 + u_time) + position.y, position.z, 1.0);

    //位置=投影矩阵*视图模型矩阵*result
    gl_Position = projectionMatrix * modelViewMatrix * result;
}