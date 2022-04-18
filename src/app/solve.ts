export const solveMethods = {

    solve()
    {
        const dull : number[] = [];
        const graph : number[] = [];
        for (let i = 0; i < this.nodes.length; i++) 
        {
            graph.push(0);
            dull.push(i);
        }

        //creates a array with all connections each node have
        const connections: number[][] = [];

        for (let i = 0; i < graph.length; i++)
            connections.push([]);

        for (let i = 0; i < this.connections.length; i++)
        {
            connections[this.connections[i].to].push(this.connections[i].from);
            connections[this.connections[i].from].push(this.connections[i].to);
        }

        let current_color = 0;
        let working = true;
        
        const done = Array(graph.length).fill(false);
        while (working)
        {
            let i = 0
            working = false

            for(const node of dull)
            {
                active(node)
            }

            function active(node)
            {
                if(graph[node] == current_color && !done[node])
                {
                    working = true
                    const passive_nodes = []
                    done[node] = true
                    for(const connection of connections[node])
                    {
                        if(graph[connection] === current_color)
                        {
                            graph[connection]++
                            passive_nodes.push(connection)
                        }
                    }
                    for(const node of passive_nodes)
                    {
                        for(const connection of connections[node])
                        {
                            active(connection)
                        }
                    }
                }
                
            }
            current_color++;
        }
        

        return graph

    }
}
